const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

require('dotenv').config()
//Set Port
// const port = process.env.PORT || '3000';
// app.set('port', port);
app.set("port", process.env.PORT || 8000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
// dist/ folder will not exsit until angular runs a build process
app.use(express.static(path.join(__dirname, 'dist')));

// Sends ALL requests to the Angular app, will render the app in browser
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// not needed w/ express
// const server = http.createServer(app);
// server.listen(port, () => console.log(`Running on localhost:${port}`));

app.listen(app.get("port"), function () {
    console.log("Lord Korak awaits on port 8000")
})
