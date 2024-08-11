const axios = require("axios");


exports.getBlog = async (req, res) => {
  try {
    const response = await axios.get('https://solusiadil-api.vercel.app/blogs');
    const blogData = Object.values(response.data);

    res.render('blog/blog', { blogData });
  } catch (error) {
    console.error('Error fetching blog data:', error);
    res.status(500).send('Error fetching blog data');
  }
};

exports.blogbacaData = async (req, res) => {
  try {
    const id_blog = req.query.id_blog;
    const response = await axios.get(`https://solusiadil-api.vercel.app/blogs/idblog/${id_blog}`);
    const response2 = await axios.get('https://solusiadil-api.vercel.app/blogs');
    const blogData2 = Object.values(response2.data);
    const blogData = response.data;
    const formattedBlog = Object.values(blogData)[0];
    if (!formattedBlog) {
      throw new Error('Data blog tidak ditemukan');
    }
    res.render('blog/blog', { blog: formattedBlog, blogData2 });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan dalam mengambil data blog.');
  }
};

