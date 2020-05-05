var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftar menu regis
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

//alamat halaman otorisasi
router.get('/user/pelanggan/view/servis', verifikasi(), auth.ViewServis);
router.get('/user/pelanggan/input/servis', verifikasi(), auth.InputServis);

module.exports = router;