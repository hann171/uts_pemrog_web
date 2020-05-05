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
                    expiresIn: 1440
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

exports.halamanPelanggan = function(req,res){
    connection.query("SELECT t_user.nama_user, t_servis.tgl_servis, t_montir.nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, (t_montir.harga_perjam + t_servis.jumlah_sparepart*t_sparepart.harga_sparepart) AS Harga_total FROM t_servis JOIN t_sparepart JOIN t_montir JOIN t_user WHERE t_servis.id_sparepart = t_sparepart.id_sparepart AND t_servis.id_montir = t_montir.id_montir AND t_servis.id_user = t_user.id_user ORDER BY t_user.id_user",
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.oknested(rows, res);
        }
    });
}