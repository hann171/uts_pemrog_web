'use strict';
module.exports = function(app){
    var json = require('./controller');

    app.route('/')
        .get(json.index);

    app.route('/montir')
        .get(json.tampilMontir);
    
    app.route('/montir/:id')
        .get(json.tampilMontirID);

    app.route('/sparepart')
        .get(json.tampilSparepart);
    
    app.route('/sparepart/:id')
        .get(json.tampilSparepartID);

    //ADD
    app.route('/tambah/montir')
        .post(json.tambahMontir);
    app.route('/tambah/sparepart')
        .post(json.tambahSparepart);
    app.route('/tambah/level')
        .post(json.tambahLevel);
    app.route('/tambah/user')
        .post(json.tambahUser);
    app.route('/tambah/servis')
        .post(json.tambahServis);

    //UPDATE
    app.route('/ubah/montir')
        .post(json.ubahMontir);
    app.route('/ubah/sparepart')
        .post(json.ubahSparepart);
    app.route('/ubah/level')
        .post(json.ubahLevel);
    app.route('/ubah/user')
        .post(json.ubahUser);
    app.route('/ubah/servis')
        .post(json.ubahServis);
}