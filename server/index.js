//Require packages
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

//Require local files
const checkForSession = require('./middleware/checkForSession');
const swagController = require('./controllers/swag_controller');
const authController = require('./controllers/auth_controller');

//Initialize and configs
const app = express();
const port = 3000;
const secret = 'fjdksal;fjdkslajfdsafjds89u342oirneds8uvc9vio3-90u82iojref90d8ui';

//Server-wide middlware
app.use(bodyParser.json());
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

//GET endpoints
app.get('/api/swag', swagController.read);
app.get('/api/user', authController.getUser);

//POST endpoints
app.post('/api/login', authController.login);
app.post('/api/register', authController.register);
app.post('/api/signout', authController.signout);





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})