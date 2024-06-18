const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/robots.txt', (req, res) => {
    res.redirect('robots.txt')
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/scrape', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/scrape.html'));
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let secret = req.body.secret;
    if (username === 'datathon_participant' && password === 'webscrape!' && secret === 'selenium_secret') {
        // res.send('Login Successful');
        res.redirect('/scrape');
    }
    else {
        return res.send(`Invalid Credentials`);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

module.exports = app;