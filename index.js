const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const fetch = require("node-fetch")
const connection = require("./dbPool.js")

const formData = require("express-form-data");

const IP = process.env.IP || "0.0.0.0"
const PORT = process.env.PORT || 5000

// express setup
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(expressLayouts)

app.use(formData.parse());


// routes
app.get("/", async function (req, res) {
    var viewData = {}
    res.render("index", viewData)
})

// starting server
app.listen(PORT, IP, function () {
    console.log(`Express server is running at http://${IP}:${PORT}`)
})