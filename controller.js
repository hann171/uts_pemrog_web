'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("REST API Start Working!",res)
};

//Tampil Montir
exports.tampilMontir = function(req,res){
    connection.query("SELECT * FROM t_montir", function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

//Tampil Montir berdasarkan ID
exports.tampilMontirID = function(req,res){
    let id = req.params.id;
    connection.query("SELECT * FROM t_montir WHERE id_montir = ?", [id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

//Tampil Sparepart
exports.tampilSparepart = function(req,res){
    connection.query("SELECT * FROM t_sparepart", function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

//Tampil Sparepart berdasarkan ID
exports.tampilSparepartID = function(req,res){
    let id = req.params.id;
    connection.query("SELECT * FROM t_sparepart WHERE id_sparepart = ?", [id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

//Add Montir
exports.tambahMontir = function(req,res){
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES (?,?)',
    [nama_montir,harga_perjam],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah diinput ke dalam Database", res);
        }
    });
};

//Add Sparepart
exports.tambahSparepart = function(req,res){
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES (?,?,?)',
    [nama_sparepart,harga_sparepart,satuan],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah diinput ke dalam Database", res);
        }
    });
};

//Add User
exports.tambahUser = function(req,res){
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (nama_user,email,password,level) VALUES (?,?,?,?)',
    [nama_user,email,password,level],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah diinput ke dalam Database", res);
        }
    });
};

//Add Level
exports.tambahLevel = function(req,res){
    var nama_level = req.body.nama_level;

    connection.query('INSERT INTO t_level (nama_level) VALUES (?)',
    [nama_level],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah diinput ke dalam Database", res);
        }
    });
};

//Add Service
exports.tambahServis = function(req,res){
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES (?,?,?,?,?)',
    [tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah diinput ke dalam Database", res);
        }
    });
};

//Ubah Montir berdasarkan ID
exports.ubahMontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?,harga_perjam=? WHERE id_montir=?',
    [nama_montir,harga_perjam,id_montir],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah di update", res);
        }
    });
};

//ubah Sparepart
exports.ubahSparepart = function(req,res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepart SET nama_sparepart=?,harga_sparepart=?,satuan=? WHERE id_sparepart=?',
    [nama_sparepart,harga_sparepart,satuan,id_sparepart],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah di update", res);
        }
    });
};

//ubah User
exports.ubahUser = function(req,res){
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('UPDATE t_user SET nama_user=?,email=?,password=?,level=? WHERE id_user=?',
    [nama_user,email,password,level,id_user],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah di update", res);
        }
    });
};

//ubah Level
exports.ubahLevel = function(req,res){
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=?',
    [nama_level,id_level],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah di update", res);
        }
    });
};

//ubah Servis
exports.ubahServis = function(req,res){
    var id_servis = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('UPDATE t_servis SET tgl_servis=?,id_user=?,id_montir=?,jumlah_sparepart=?,id_sparepart=? WHERE id_servis=?',
    [tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,id_servis],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data telah di update", res);
        }
    });
};