const axios = require("axios");

//Fungsi Ke Halaman Konsultasi
exports.getKonsultasi = async (req, res) => {
    if (req.user) {
      const nama = req.user.nama;
      const id_masyarakat = req.user.id_masyarakat;
      const nik = req.user.nik;
      try {
        const response = await axios.get(
          `https://solusiadil-api.vercel.app/konsultasi/idmasyarakat/${id_masyarakat}`
        );
        const konsultasiObj = response.data;
        const konsultasiData = Object.values(konsultasiObj);
        res.render("konsultasi/konsultasi", {
          nama: nama,
          id_masyarakat: id_masyarakat,
          nik: nik,
          konsultasiData: konsultasiData,
        });
      } catch (error) {
        res.render("konsultasi/konsultasi", {
          nama: nama,
          id_masyarakat: id_masyarakat,
          nik: nik,
          konsultasiData: [],
        });
      }
    } else {
      res.redirect("/masuk");
    }
  };

//Fungsi Ke Lihat Data Konsultasi
exports.konsultasiData = async (req, res) => {
    try {
      const {
        id_konsultasi,
        id_masyarakat,
        id_apph = "Masih kosong",
        nama_apph = "Masih kosong",
        calendly = "Masih kosong",
        judul = "Masih kosong",
        pertanyaan,
        nama_mast,
        jawaban = "Masih kosong",
        keterangan,
        jenis,
        undangundang = "Masih kosong",
        status = "Menunggu",
        lanjutan1 = "Masih kosong",
        wilayahhukum,
        referensi = "Masih kosong",
        media = "Masih kosong",
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
          calendly,
          judul,
          pertanyaan,
          jawaban,
          keterangan,
          jenis,
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
                alert("Konsultasi berhasil di ajukan, akan berpindah ke halaman Awal");
                window.location.href = "/beranda";
              </script>
            </head>
            <body>
              <p>Kembalikan..</p>
            </body>
          </html>
        `);
      } else {
        throw new Error("Gagal mendaftarkan data konsultasi Anda");
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

//Fungsi Ke Halaman Detail Konsultasi
exports.getDetailKonsultasi = async (req, res) => {
    try {
      const id_konsultasi = req.query.id;
      const response = await axios.get(
        `https://solusiadil-api.vercel.app/konsultasi/idkonsultasi/${id_konsultasi}`
      );
      const konsultasiData = response.data;
      const formattedKonsultasi = Object.values(konsultasiData)[0];
      if (!formattedKonsultasi) {
        throw new Error("Data konsultasi tidak ditemukan");
      }
      res.render("konsultasi/detailkonsultasi", {
        konsultasi: formattedKonsultasi,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan dalam mengambil data konsultasi.");
    }
  };

//Fungsi Ke Proses Lihat Konsultasi
exports.getDiprosesKonsultasi = async (req, res) => {
  try {
    const id_konsultasi = req.query.id;
    const response = await axios.get(
      `https://solusiadil-api.vercel.app/konsultasi/idkonsultasi/${id_konsultasi}`
    );
    const konsultasiData = response.data;
    const formattedKonsultasi = Object.values(konsultasiData)[0];
    if (!formattedKonsultasi) {
      throw new Error("Data konsultasi tidak ditemukan");
    }
    res.render("konsultasi/proseskonsultasi", {
      konsultasi: formattedKonsultasi,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan dalam mengambil data konsultasi.");
  }
};

//Fungsi Ke Perbarui Konsultasi Berdasarkan APPH
exports.updateKonsultasi = async (req, res) => {
    try {
      const konsultasiId = req.body.id_konsultasi;
      const updatedData = {
        id_apph: req.body.id_apph,
        id_konsultasi: req.body.id_konsultasi,
        id_masyarakat: req.body.id_masyarakat,
        jawaban: req.body.jawaban,
        judul: req.body.judul,
        keterangan: req.body.keterangan,
        jenis: req.body.jenis,
        lanjutan1: req.body.lanjutan1,
        media: "Belum Tersedia",
        nama_apph: req.body.nama_apph,
        calendly: "Terjadwal",
        nama_mast: req.body.nama_mast,
        pertanyaan: req.body.pertanyaan,
        referensi: req.body.referensi,
        status: req.body.status,
        tanggal: req.body.tanggal,
        undangundang: req.body.undangundang,
        wilayahhukum: req.body.wilayahhukum,
      };
      await axios.put(
        `https://solusiadil-api.vercel.app/konsultasi/${konsultasiId}`,
        updatedData
      );
      res.redirect("/konsultasi");
    } catch (error) {
      console.error("Error updating konsultasi:", error);
      res.status(500).send("Error updating konsultasi");
    }
  };

//Fungsi Ke Halaman Akhir Data Konsultasi
exports.getEndKonsultasi = async (req, res) => {
    try {
      const id_konsultasi = req.query.id;
      const response = await axios.get(
        `https://solusiadil-api.vercel.app/konsultasi/idkonsultasi/${id_konsultasi}`
      );
      const konsultasiData = response.data;
      const formattedKonsultasi = Object.values(konsultasiData)[0];
      if (!formattedKonsultasi) {
        throw new Error("Data konsultasi tidak ditemukan");
      }
      res.render("konsultasi/endkonsultasi", { konsultasi: formattedKonsultasi });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan dalam mengambil data konsultasi.");
    }
  };

//Fungsi Ke Cetak Konsultasi
exports.cetakKonsultasi = async (req, res) => {
    try {
      const id_konsultasi = req.query.id;
      const response = await axios.get(
        `https://solusiadil-api.vercel.app/konsultasi/idkonsultasi/${id_konsultasi}`
      );
      const konsultasiData = response.data;
      const formattedKonsultasi = Object.values(konsultasiData)[0];
      if (!formattedKonsultasi) {
        throw new Error("Data konsultasi tidak ditemukan");
      }
      res.render("konsultasi/cetakkonsultasi", { konsultasi: formattedKonsultasi });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan dalam mengambil data konsultasi.");
    }
  };

