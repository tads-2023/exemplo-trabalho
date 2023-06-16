const express = require("express");
const mongoose = require("mongoose");
const User = require("./colecoes/User");
const cors = require("cors");
const multer  = require('multer')
const upload = multer({ dest: 'imagens/' })

const {MongoMemoryServer} = require('mongodb-memory-server');

let setup = async () => {
    const mongod = await MongoMemoryServer.create();

    mongoose.connect(`${mongod.getUri()}trabalho`).then( () => {
        const app = express();

        app.use(cors());

        app.use(express.json());

        app.post("/criar-usuario", upload.single("foto"), async (requisicao, resposta) => {
            const nome = requisicao.body.nome;
            const email = requisicao.body.email;
            const senha = requisicao.body.senha;
            const dataNascimento = requisicao.body.dataNascimento;

            const user = await User.create({nome, email, senha, dataNascimento})

            console.log("Usuarui salvo", user);

            resposta.send(user)
        });

        // http://localhost:3000
        app.listen(3000,  () => {
            console.log("Servidor conectado e ligado!");
        })
        //Até aqui está conectado
    })
} 

setup();
