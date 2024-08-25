const axios = require('axios');

//Fungsi Ke Halaman Aturan
exports.getDataaturan = async (req, res) => {
    try {
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get('https://solusiadil-api.vercel.app/undangundang');
      const aturanData = Object.values(response.data);
  
      res.render('aturan/dataaturan', { aturanData, id_masyarakat, nama });
    } catch (error) {
      console.error('Error fetching aturan data:', error);
      res.status(500).send('Error fetching aturan data');
    }
  };

//Fungsi Ke Baca Aturan
exports.aturanbacaData = async (req, res) => {
    try {
      const id_uu = req.query.id_uu;
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get(`https://solusiadil-api.vercel.app/undangundang/idundangundang/${id_uu}`);
      const response2 = await axios.get('https://solusiadil-api.vercel.app/undangundang');
      const aturanData2 = Object.values(response2.data);
      const aturanData = response.data;
      const formattedaturan = Object.values(aturanData)[0];
      if (!formattedaturan) {
        throw new Error('Data aturan tidak ditemukan');
      }
      res.render('aturan/bacaaturan', { aturan: formattedaturan, aturanData2, id_masyarakat, nama });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan dalam mengambil data Peraturan.');
    }
  };