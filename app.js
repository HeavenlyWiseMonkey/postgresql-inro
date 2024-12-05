require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const usernameRouter = require('./routes/usernameRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', usernameRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express app listening at port: ${PORT}`);
})