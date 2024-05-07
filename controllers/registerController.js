// registerController.js

const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

exports.registerUser = async (req, res) => {
    try {
        // Generate random ID for masyarakat
        const id_masyarakat = uuidv4();

        // Ambil data dari body request
        const { nama, nik, alamat, email, foto, jenis_kelamin, no_tlp, password, tgl_lahir } = req.body;

        // Kirim data ke API
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

        // Kirim respon ke client
        res.status(201).json({ success: true, message: 'User berhasil didaftarkan', data: response.data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Gagal mendaftarkan user' });
    }
};
