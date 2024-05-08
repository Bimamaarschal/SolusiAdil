const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'notsosecret', // Ganti dengan string rahasia yang lebih aman
    resave: true, // Setel menjadi true jika Anda ingin menyimpan sesi yang telah diubah
    saveUninitialized: true // Setel menjadi true jika Anda ingin menyimpan sesi yang belum diinisialisasi
  }));
  
app.use('/', express.static('public'));

app.use('/', registerRoutes);
app.use('/', loginRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    
});


