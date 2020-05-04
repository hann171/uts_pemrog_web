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