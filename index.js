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
    // homepage
    var viewData = {}
    res.render("index", viewData)
})
app.get("/ebook", async function (req, res) {
    // ebook index page; browse books
    var viewData = {}
    res.render("ebook-index", viewData)
})
app.get("/ebook/:ebook_id", async function (req, res) {
    // ebook page; show detail for single ebook
    var viewData = {}
    res.render("ebook-show", viewData)
})
app.get("/api/ebook", async function (req, res) {
    // return a list of ebooks available
    res.send()
})
app.get("/api/ebook/:ebook_id", async function (req, res) {
    // return single ebook detail
    res.send()
})
app.get("/api/ebook/:ebook_id/checkout", async function (req, res) {
    // user checks out a book
    res.send()
})
app.get("/login", async function (req, res) {
    // login page
    var viewData = {}
    res.render("login", viewData)
})
app.get("/api/login", async function (req, res) {
    // login api call
    res.send()
})
app.get("/api/logout", async function (req, res) {
    // logout api call
    res.send()
})
app.get("/user", async function (req, res) {
    // user management page; 
    var viewData = {}
    res.render("user-index", viewData)
})
app.get("/user/ebook", async function (req, res) {
    // user borrowed ebooks index; show list of borrowed books 
    var viewData = {}
    res.render("user-ebook-index", viewData)
})
app.get("/user/ebook/:borrow_id", async function (req, res) {
    // user borrowed ebook; display ebook to user in browser
    var viewData = {}
    res.render("user-ebook-show", viewData)
})
app.get("/api/user/ebook/:borrow_id/return", async function (req, res) {
    // user borrowed ebook; display ebook to user in browser
    res.send()
})

// starting server
app.listen(PORT, IP, function () {
    console.log(`Express server is running at http://${IP}:${PORT}`)
})