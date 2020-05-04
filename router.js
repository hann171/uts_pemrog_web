'use strict';
module.exports = function(app){
    var json = require('./controller');

    app.route('/')
        .get(json.index);

    //VIEWS
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
        .put(json.ubahMontir);
    app.route('/ubah/sparepart')
        .put(json.ubahSparepart);
    app.route('/ubah/level')
        .put(json.ubahLevel);
    app.route('/ubah/user')
        .put(json.ubahUser);
    app.route('/ubah/servis')
        .put(json.ubahServis);

    //DELETE
    app.route('/hapus/montir')
        .delete(json.hapusMontir);
    app.route('/hapus/sparepart')
        .delete(json.hapusSparepart);
    app.route('/hapus/user')
        .delete(json.hapusUser);
    app.route('/hapus/level')
        .delete(json.hapusLevel);
    app.route('/hapus/servis')
        .delete(json.hapusServis);
}