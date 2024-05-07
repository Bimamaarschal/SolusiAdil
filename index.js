const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: true
}));

app.use('/', express.static('public'));
app.use('/', registerRoutes);
app.use('/', loginRoutes);
app.use('/', routesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    
});


