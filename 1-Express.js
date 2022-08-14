const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

var publicPath = path.join(__dirname, 'public');

app.use(express.static("./public"));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/doctors', (req, res) => {
    res.sendFile(publicPath + '/doctors.html');
})

app.get('/prescription', (req, res) => {
    res.sendFile(publicPath + '/prescription.html');
})

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000/");
});
