const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Udostępnianie plików z folderu "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Serwer działa! Plik dźwiękowy dostępny pod /hover.mp3");
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});

module.exports = app;
