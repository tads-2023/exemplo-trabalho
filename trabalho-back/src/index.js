const express = require("express");
const mongoose = require("mongoose");
const User = require("./colecoes/User");

mongoose.connect("mongodb+srv://rf3993:<password>@cluster0.apqhhjv.mongodb.net/").then( () => {

    const app = express();

    app.post("/criar-usuario", async (requisicao, resposta) => {
        const nome = requisicao.body.nome;
        const email = requisicao.body.email;
        const senha = requisicao.body.senha;
        const dataNascimento = requisicao.body.dataNascimento;

        const user = await User.create({nome, email, senha, dataNascimento})

        resposta.send(user)
    });

    // http://localhost:3000
    app.listen(3000,  () => {
        console.log("Servidor conectado e ligado!");
    })



    //Até aqui está conectado
})

//N"ao esta conectado com o bacno;

