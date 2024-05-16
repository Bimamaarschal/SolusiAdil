
exports.getBeranda = (req, res) => {
    if (req.user) {
      const nama = req.user.nama;
      const idMasyarakat = req.user.id_masyarakat;
      res.render('beranda', { nama: nama, idMasyarakat: idMasyarakat });
    } else {
      res.redirect('/masuk');
    }
  };