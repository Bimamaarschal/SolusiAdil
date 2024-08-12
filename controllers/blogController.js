const axios = require('axios');

exports.getDatablog = async (req, res) => {
    try {
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get('https://solusiadil-api.vercel.app/blogs');
      const blogData = Object.values(response.data);
  
      res.render('blog/datablog', { blogData, id_masyarakat, nama });
    } catch (error) {
      console.error('Error fetching blog data:', error);
      res.status(500).send('Error fetching blog data');
    }
  };

  exports.blogbacaData = async (req, res) => {
    try {
      const id_blog = req.query.id_blog;
      const { id_masyarakat, nama } = req.user;
      const response = await axios.get(`https://solusiadil-api.vercel.app/blogs/idblog/${id_blog}`);
      const response2 = await axios.get('https://solusiadil-api.vercel.app/blogs');
      const blogData2 = Object.values(response2.data);
      const blogData = response.data;
      const formattedBlog = Object.values(blogData)[0];
      if (!formattedBlog) {
        throw new Error('Data blog tidak ditemukan');
      }
      res.render('blog/bacablog', { blog: formattedBlog, blogData2, id_masyarakat, nama });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan dalam mengambil data blog.');
    }
  };