const axios = require("axios");

exports.getKonsultasi = (req, res) => {
  if (req.user) {
    const nama = req.user.nama;
    const id_masyarakat = req.user.id_masyarakat;
    const nik = req.user.nik;
    res.render('konsultasi', { nama: nama, id_masyarakat: id_masyarakat, nik: nik });
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
      judul= "Masih kosong",
      pertanyaan,
      nama_mast,
      jawaban= "Masih kosong",
      keterangan,
      undangundang= "Masih kosong",
      status= "Menunggu",
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
        judul, 
        pertanyaan, 
        jawaban, 
        keterangan, 
        undangundang, 
        status, 
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
            <p>Kembalikan...</p>
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
