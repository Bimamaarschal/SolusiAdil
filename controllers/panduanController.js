const axios = require("axios");

//Fungsi Ke Halaman Panduan
exports.getDatapanduan = async (req, res) => {
    try {
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get(
        "https://solusiadil-api.vercel.app/panduan"
      );
      const panduanData = Object.values(response.data);
      res.render("panduan/datapanduan", { panduanData, id_masyarakat, nama });
    } catch (error) {
      console.error("Error fetching panduan data:", error);
      res.status(500).send("Error fetching panduan data");
    }
  };

//Fungsi Membaca Panduan
exports.panduanbacaData = async (req, res) => {
    try {
      const id_panduan = req.query.id_panduan;
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get(
        `https://solusiadil-api.vercel.app/panduan/idpanduan/${id_panduan}`
      );
      const response2 = await axios.get(
        "https://solusiadil-api.vercel.app/panduan"
      );
      const panduanData2 = Object.values(response2.data);
      const panduanData = response.data;
      const formattedpanduan = Object.values(panduanData)[0];
      if (!formattedpanduan) {
        throw new Error("Data panduan tidak ditemukan");
      }
      res.render("panduan/bacapanduan", {
        panduan: formattedpanduan,
        panduanData2,
        id_masyarakat,
        nama,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan dalam mengambil data panduan.");
    }
  };
