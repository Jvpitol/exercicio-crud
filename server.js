import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import usuarios from './usuarios.js';


const app = express();
const PORT = 3000;

async function conectaNaDatabase(){
   mongoose.connect(process.env.DB_CONNECTION_STRING);
   return mongoose.connection;
};

const conexao = await conectaNaDatabase();

conexao.on('error',(erro) => {
   console.error('Erro de conexão:', erro);
});

conexao.once('open', () => {
   console.log('Conexão com o banco de dados feita com sucesso');
})


app.use(express.json())


// Rota básica '/'
app.get ('/', (req,res) => {
    res.status(200).send('O Servidor está vivo e respondendo!');
});

 // get para visualizar o BD
 app.get ('/usuarios', async (req,res) => {
   const listadeUsuarios = await usuarios.find({});
    res.status(200).json(listadeUsuarios);
 });

 //post para visualizar um item no BD
 app.get ('/usuarios/:id', async (req,res) => {
    const { id } = req.params;
    let usuario = await usuarios.findById(id);
    if (usuario){
      res.status(200).send(usuario);
    } else {
      res.status(404).json({ mensagem: 'Usuário não encontrado. Verifique o ID' });
    }
    });

 
 //post para adicionar itens no BD
 app.post ('/usuarios', async (req,res) => {
    const novoUsuario = req.body;
    await usuarios.create(novoUsuario);
    res.status(201).json ({mensagem: 'Usuário adicionado com sucesso!', novoUsuario: novoUsuario});
 });

// para deletar itens no BD
 app.delete ('/usuarios/:id', async (req,res) => {
    const { id } = req.params;
    await usuarios.findByIdAndDelete(id);
    res.status(200).send ('Usuário deletado com sucesso!');
 });


 //put para atualizar parte do item no BD
 app.put ('/usuarios/:id', async (req,res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const usuarioAtualizado = await usuarios.findByIdAndUpdate(id, { nome }, { new: true });
    if (usuarioAtualizado){
      res.status(200).json ({mensagem: 'Atualizado com Sucesso!', nome: nome});
    } else {
      res.status(404).json ({erro: 'Usuário não encontrado'});
    }
 });

 //patch para atualizar item no BD
 app.patch ('/usuarios/:id', async (req,res) => {
    const { id } = req.params;
    const novosDados = req.body;
    const usuarioAtualizado = await usuarios.findByIdAndUpdate(id, novosDados, { new: true });

    if (usuarioAtualizado){
      res.status(200).json ({mensagem: 'Atualizado com Sucesso!', usuario: usuarioAtualizado});
    } else {
      res.status(404).json ({erro: 'Usuário não encontrado'});
    }
 });

app.listen (PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`);
});