var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//Controller Register
exports.registrasi = function(req,res){
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["t_user","email", post.email];

    query = mysql.format(query,table);
    connection.query(query, function(error,rows){
        if(error){
            console.log("error nya disini");
        }
        else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query = mysql.format(query,table);
                connection.query(query, post, function(error,rows){
                    if(error){
                        console.log("disini error");
                    }else{
                        response.ok("Berhasil Menambahkan Data User Baru", res);
                    }
                });
            }else{
                response.ok("Email sudah terdaftar!",res);
            }
        }
    });
}

//controller login
exports.login = function(req,rest){
    var post = {
        email: req.body.email,
        password: req.body.password
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["t_user","email",post.email,"password",md5(post.password)];

    query = mysql.format(query,table);
     
    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 300
                });
                id_user = rows[0].id_user;
                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["t_akses_token"];

                query = mysql.format(query,table);
                
                connection.query(query,data,function(error,rows){
                    if(error){
                        console.log(error);
                    }else{
                        rest.json({
                            success: true,
                            message: 'Token JWT Generated!',
                            token:token,
                            currUser: data.id_user
                        });
                    }
                });
            }else{
                 rest.json({"Error": true, "Message":"Email atau Password salah!"});
            }
        }
    });
}