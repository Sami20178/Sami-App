const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/source", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({
            error: "URL fehlt"
        });
    }

    try {
        const response = await axios.get(url);

        res.json({
            html: response.data
        });
    } catch (err) {
        res.status(500).json({
            error: "Webseite konnte nicht geladen werden"
        });
    }
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});
