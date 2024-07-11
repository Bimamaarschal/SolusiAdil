const axios = require("axios");

exports.getKonsultasi = async (req, res) => {
  if (req.user) {
    const nama = req.user.nama;
    const id_masyarakat = req.user.id_masyarakat;
    const nik = req.user.nik;
    try {
      const response = await axios.get(`https://solusiadil-api.vercel.app/konsultasi/idmasyarakat/${id_masyarakat}`);
      const konsultasiObj = response.data;
      const konsultasiData = Object.values(konsultasiObj);
      res.render('konsultasi', { nama: nama, id_masyarakat: id_masyarakat, nik: nik, konsultasiData: konsultasiData });
    } catch (error) {
      res.status(500).send('Error fetching data from API');
    }
  } else {
    res.redirect('/masuk');
  }
};

exports.konsultasiData = async (req, res) => {
  try {
    const {
      id_konsultasi,
      id_masyarakat,
      id_apph= "Masih kosong",
      nama_apph= "Masih kosong",
      judul= "Masih kosong",
      pertanyaan,
      nama_mast,
      jawaban= "Masih kosong",
      keterangan,
      undangundang= "Masih kosong",
      status= "Menunggu",
      lanjutan1= "Masih kosong",
      wilayahhukum= "Masih kosong",
      referensi= "Masih kosong",
      media= "Masih kosong",
    } = req.body;

    const tanggal = new Date().toISOString().slice(0, 10); 

    const response = await axios.post(
      "https://solusiadil-api.vercel.app/konsultasi",
      {
        id_konsultasi, 
        tanggal, 
        id_masyarakat, 
        nama_mast, 
        id_apph, 
        nama_apph, 
        judul, 
        pertanyaan, 
        jawaban, 
        keterangan, 
        undangundang, 
        status,
        lanjutan1,
        wilayahhukum,
        referensi,
        media,
      }
    );
    

    if (response.status === 201) {
      res.send(`
        <html>
          <head>
            <title>Registration Success</title>
            <script>
              alert("Berhasil di data");
              window.location.href = "/beranda";
            </script>
          </head>
          <body>
            <p>Kembalikan..</p>
          </body>
        </html>
      `);
    } else {
      throw new Error("Gagal mendaftarkan data konsultasi");
    }
  } catch (error) {
    console.error("Error:", error);
    res.send(`
      <html>
        <head>
          <title>Konsultasi gagal </title>
          <script>
            alert("User Gagal Daftar karena ${error.message}");
            window.location.href = "/konsultasi";
          </script>
        </head>
        <body>
          <p>Kembalikan...</p>
        </body>
      </html>
    `);
  }
};
exports.getDetailKonsultasi = async (req, res) => {
  try {
    const id_konsultasi = req.query.id;
    const response = await axios.get(`https://solusiadil-api.vercel.app/konsultasi/idkonsultasi/${id_konsultasi}`);
    const konsultasiData = response.data;

    // Ubah format objek jika diperlukan
    const formattedKonsultasi = Object.values(konsultasiData)[0]; // Ambil nilai dari objek

    if (!formattedKonsultasi) {
      throw new Error('Data konsultasi tidak ditemukan');
    }

    res.render('detailkonsultasi', { konsultasi: formattedKonsultasi });

  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan dalam mengambil data konsultasi.');
  }
};