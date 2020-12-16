//recuperation du contenu express
const express = require('express');
const app = express(); //on cree un objet express
const port = 3000;
var valeurJson = require('./meteo.json');

app.set('view engine', 'ejs');
app.locals.region1 = valeurJson[0].region;
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page.html');
});*/
app.get('/javascript', (request, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/im', (req, res) => {
    res.sendFile(__dirname + '/images/meteo.gif');
});
app.use(express.static('css'));
app.get('/im1', (req, res) => {
    res.sendFile(__dirname + '/images/meteo_animata.gif');
});
app.get('/im2', (req, res) => {
    res.sendFile(__dirname + '/images/meteoPresentGirl.gif');
});
app.get('/im3', (req, res) => {
    res.sendFile(__dirname + '/images/meteoRules.gif');
});
app.get('/im4', (req, res) => {
    res.sendFile(__dirname + '/images/off.png');
});
app.get('/im5', (req, res) => {
    res.sendFile(__dirname + '/images/on.png');
});
app.get('/getJson', (req, res) => {
    app.locals.region1 = res.send(app.locals.valeurJson[0].region);
    console.log(app.locals.region1);
});

app.get('/', (req, res) => {
    res.render('page', { valeurJson: valeurJson });
});
app.listen(port, (err) => {
    if (!err) {
        console.log(`Demarrage du serveur depuis l'adresse: http://localhost:${port}`);
    } else {
        console.log(JSON.stringify(err));
    }
});