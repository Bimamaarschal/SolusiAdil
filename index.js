const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use(session({
  secret: 'notsosecret', 
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  if (req.query.login === 'true') {
    req.session.isLoggedIn = true;
  } else if (req.query.logout === 'true') {
    req.session.isLoggedIn = false;
  }
  next();
});

app.use((req, res, next) => {
  console.log(req.session); // Log session data
  next();
});

app.get('/set-session', (req, res) => {
  req.session.isLoggedIn = true; // Set session data
  res.send('Session set');
});

app.get('/check-session', (req, res) => {
  console.log(req.session.isLoggedIn); // Check session data
  res.send('Session checked');
});
// Route to render the homepage
// Route to render the homepage
app.get('/', (req, res) => {
  res.render('index', { session: req.session });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const routeRoutes = require('./routes/routeRoutes');

app.use('/', registerRoutes);
app.use('/', loginRoutes);
app.use('/', routeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
