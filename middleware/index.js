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
router.post('/user/pelanggan/input/servis', verifikasi.verifikasiPelanggan(), con.tambahServis);

//Admin
router.post('/user/admin/input/montir', verifikasi.verifikasiAdmin(), con.tambahMontir);
router.post('/user/admin/input/user', verifikasi.verifikasiAdmin(), con.tambahUser);
router.post('/user/admin/input/sparepart', verifikasi.verifikasiAdmin(), con.tambahSparepart);
router.post('/user/admin/input/servis', verifikasi.verifikasiAdmin(), con.tambahServis);
router.post('/user/admin/input/level', verifikasi.verifikasiAdmin(), con.tambahLevel);

router.put('/user/admin/ubah/montir', verifikasi.verifikasiAdmin(), con.ubahMontir);
router.put('/user/admin/ubah/user', verifikasi.verifikasiAdmin(), con.ubahUser);
router.put('/user/admin/ubah/sparepart', verifikasi.verifikasiAdmin(), con.ubahSparepart);
router.put('/user/admin/ubah/servis', verifikasi.verifikasiAdmin(), con.ubahServis);
router.put('/user/admin/ubah/level', verifikasi.verifikasiAdmin(), con.ubahLevel);

router.delete('/user/admin/hapus/montir', verifikasi.verifikasiAdmin(), con.hapusMontir);
router.delete('/user/admin/hapus/user', verifikasi.verifikasiAdmin(), con.hapusUser);
router.delete('/user/admin/hapus/sparepart', verifikasi.verifikasiAdmin(), con.hapusSparepart);
router.delete('/user/admin/hapus/servis', verifikasi.verifikasiAdmin(), con.hapusServis);
router.delete('/user/admin/hapus/level', verifikasi.verifikasiAdmin(), con.hapusLevel);

router.get('/user/admin/view/servis', verifikasi.verifikasiAdmin(), con.tampilGroupServis);
module.exports = router;