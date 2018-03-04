const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var cloudinary = require("cloudinary");
const app = express();
require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

//Set Port
const port = process.env.PORT || '8000';
app.set('port', port);
// app.set("port", process.env.PORT || 8000)

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
// dist/ folder will not exsit until angular runs a build process
app.use(express.static(path.join(__dirname, 'dist')));

// cors needs to change in production
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getmephotos', (req, res) => {
    cloudinary.v2.api.resources({ type: 'upload', prefix: 'random/' }, function (error, result) {
        console.log(error)
        let urls = result.resources.map(el => {
            return el.url
        })
        res.json({ "get": true, "url": urls })
    });
})
// app.get('/api/locations', (req, res) => {
//     cloudinary.v2.api.resources({ type: 'upload', prefix: 'locations/' }, function (error, result) {
//         console.log(error)
//         let urls = result.resources.map(el => {
//             return el.url
//         })
//         res.json({ "get": true, "url": urls })
//     });
// })
// app.get('/api/appearnaces', (req, res) => {
//     cloudinary.v2.api.resources({ type: 'upload', prefix: 'appearances/' }, function (error, result) {
//         console.log(error)
//         let urls = result.resources.map(el => {
//             return el.url
//         })
//         res.json({ "get": true, "url": urls })
//     });
// })
// app.get('/api/art', (req, res) => {
//     cloudinary.v2.api.resources({ type: 'upload', prefix: 'art/' }, function (error, result) {
//         console.log(error)
//         let urls = result.resources.map(el => {
//             return el.url
//         })
//         res.json({ "get": true, "url": urls })
//     });
// })
// app.get('/api/videos', (req, res) => {
//     cloudinary.v2.api.resources({ type: 'upload', prefix: 'videos/' }, function (error, result) {
//         console.log(error)
//         let urls = result.resources.map(el => {
//             return el.url
//         })
//         res.json({ "get": true, "url": urls })
//     });
// })


// Sends ALL requests to the Angular app, will render the app in browser
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(app.get("port"), function () {
    console.log("Lord Korak awaits on port 8000")
})
