require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: "static"});
});
app.get("/:p", (req, res) => {
    if(req.params.p == "Home" || req.params.p == "Projetos" || req.params.p == "Contato"){
        res.sendFile("index.html", {root: "static"});
    }else{
        res.status(404).end('error');
    }
});
app.get("/MainFront/img/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/img"});
});
app.get("/MainFront/style/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/styles"});
});
app.get("/MainFront/js/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/js"});
});
app.get("/MainFront/js/slick/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/js/slick"});
});
app.get("/MainFront/icon/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/icons"});
});
app.get("/MainFront/page/:id", (req, res) => {
    res.sendFile(req.params.id, {root: "static/pages"});
});

app.listen(process.env.PORT || 3001);