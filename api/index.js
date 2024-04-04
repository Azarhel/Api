const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("/api/v1/contacto"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
