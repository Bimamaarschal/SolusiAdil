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
    secret: 'notsosecret', 
    resave: true,
    saveUninitialized: true
  }));
  
app.use('/', express.static('public'));

app.use('/', registerRoutes);
app.use('/', loginRoutes);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    
});


