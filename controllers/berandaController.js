
//Fungsi Ke Halaman Beranda Setelah Login
exports.getBeranda = (req, res) => {
    if (req.user) {
      const nama = req.user.nama;
      const idMasyarakat = req.user.id_masyarakat;
      const Nik = req.user.nik;
      res.render('beranda', { nama: nama, idMasyarakat: idMasyarakat, Nik: Nik });
    } else {
      res.redirect('/masuk');
    }
  };