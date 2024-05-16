const path = require('path');

exports.getBeranda = (req, res) => {
    if (req.session.user) {
        // Ambil nama dan id_masyarakat dari session
        const nama = req.session.user.nama;
        const idMasyarakat = req.session.user.id_masyarakat;

        // Render beranda.ejs dengan data pengguna yang diberikan
        res.render('beranda', { nama: nama, idMasyarakat: idMasyarakat });
    } else {
        res.redirect('/masuk');
    }
};