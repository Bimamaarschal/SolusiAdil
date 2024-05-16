const path = require('path');

exports.getBeranda = (req, res) => {
    if (req.session.user) {
        const nama = req.session.user.nama;
        const idMasyarakat = req.session.user.id_masyarakat;
        res.render('beranda', { nama: nama, idMasyarakat: idMasyarakat });
    } else {
        res.redirect('/masuk');
    }
};