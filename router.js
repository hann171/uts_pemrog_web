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

    app.route('/tambah/montir')
        .post(json.tambahMontir);

    app.route('/ubah/montir')
        .post(json.ubahMontir);
}