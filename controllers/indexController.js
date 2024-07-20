const axios = require("axios");

exports.getindexData = async (req, res) => {
  try {
    const users = await axios.get('https://solusiadil-api.vercel.app/users');
    const konsultasi = await axios.get('https://solusiadil-api.vercel.app/konsultasi');
    const apph = await axios.get('https://solusiadil-api.vercel.app/apph');

    const usersData = Object.values(users.data);
    const konsultasiData = Object.values(konsultasi.data);
    const apphData = Object.values(apph.data);

    const totalUsers = usersData.length;
    const totalKonsultasi = konsultasiData.length;
    const totalApph = apphData.length;

    res.render('index', { totalUsers, totalKonsultasi, totalApph });
  } catch (error) {
    console.error('Error fetching blog data:', error);
    res.status(500).send('Error fetching blog data');
  }
};