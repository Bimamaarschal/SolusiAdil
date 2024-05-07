// registerController.js

const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

exports.registerUser = async (req, res) => {
    try {
        const id_masyarakat = uuidv4();
        const { nama, nik, alamat, email, foto, jenis_kelamin, no_tlp, password, tgl_lahir } = req.body;
        const response = await axios.post('https://solusiadil-api.vercel.app/users', {
            id_masyarakat,
            nama,
            nik,
            alamat,
            email,
            foto,
            jenis_kelamin,
            no_tlp,
            password,
            tgl_lahir
        });
        res.status(201).json({ success: true, message: 'User berhasil didaftarkan', data: response.data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Gagal mendaftarkan user' });
    }
};
