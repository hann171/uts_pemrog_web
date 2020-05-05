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