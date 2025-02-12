const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const cors = require("cors");
const rotas = require("./routes/routes.js");
const fs = require("fs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

app.engine("handlebars", exphbs.engine());
app.set("view engine","handlebars");
app.set("views", path.join(__dirname, "view"));

app.use("/home", rotas);

app.get("/",(req,res)=>{
    res.send("<h1>bem vindo ....</h1>");
})

// esquema de rotas !!!

app.listen(5000, ()=>{
    console.log("rodando na porta 5000 ...");
})