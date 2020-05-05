var express = require('express');
var auth = require('./auth');
var router = express.Router();
//var verifikasi = require('./verifikasi');

//daftar menu regis
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

//alamat halaman otorisasi
//router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);

module.exports = router;