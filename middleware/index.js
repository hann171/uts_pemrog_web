var express = require('express');
var auth = require('./auth');
var con = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftar menu regis
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

//alamat halaman otorisasi

//Pelanggan
router.get('/user/pelanggan/view/servis', verifikasi.verifikasiPelanggan(), con.tampilGroupServis);
router.get('/user/pelanggan/input/servis', verifikasi.verifikasiPelanggan(), con.tambahServis);

//Admin
router.get('/user/admin/input/montir', verifikasi.verifikasiAdmin(), con.tambahMontir);
router.get('/user/admin/input/user', verifikasi.verifikasiAdmin(), con.tambahUser);
router.get('/user/admin/input/sparepart', verifikasi.verifikasiAdmin(), con.tambahSparepart);
router.get('/user/admin/input/servis', verifikasi.verifikasiAdmin(), con.tambahServis);
router.get('/user/admin/input/level', verifikasi.verifikasiAdmin(), con.tambahLevel);

router.get('/user/admin/ubah/montir', verifikasi.verifikasiAdmin(), con.ubahMontir);
router.get('/user/admin/ubah/user', verifikasi.verifikasiAdmin(), con.ubahUser);
router.get('/user/admin/ubah/sparepart', verifikasi.verifikasiAdmin(), con.ubahSparepart);
router.get('/user/admin/ubah/servis', verifikasi.verifikasiAdmin(), con.ubahServis);
router.get('/user/admin/ubah/level', verifikasi.verifikasiAdmin(), con.ubahLevel);

router.get('/user/admin/hapus/montir', verifikasi.verifikasiAdmin(), con.hapusMontir);
router.get('/user/admin/hapus/user', verifikasi.verifikasiAdmin(), con.hapusUser);
router.get('/user/admin/hapus/sparepart', verifikasi.verifikasiAdmin(), con.hapusSparepart);
router.get('/user/admin/hapus/servis', verifikasi.verifikasiAdmin(), con.hapusServis);
router.get('/user/admin/hapus/level', verifikasi.verifikasiAdmin(), con.hapusLevel);



module.exports = router;