const express = require('express');
const app = express();
const porta = 3000;

app.get ('/', (req,res) => {
    res.send ('O Servidor está vivo e respondendo!');
});

app.use(express.json())
 let usuarios = [
    {id:1, nome: 'João'},
    {id:2, nome: 'Vítor'}
 ];

 app.get ('/usuarios', (req,res) => {
    res.json (usuarios);
 });

 app.post ('/usuarios', (req,res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json ({mensagem: 'Usuário adicionado com sucesso!', novoUsuario: novoUsuario});
 });

 app.delete ('/usuarios/:id', (req,res) => {
    const { id } = req.params;
    usuarios = usuarios.filter(u => u.id !== parseInt(id));
    res.send ('Usuário deletado com sucesso!');
 });

 app.put ('/usuarios/:id', (req,res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const i = (usuarios.findIndex(u => u.id === parseInt(id)));
    if (i !== -1){
      usuarios[i] = { id: parseInt(id), nome};
      res.json ({mensagem: 'Atualizado com Sucesso!', nome: nome});
    } else {
      res.status(404).json ({erro: 'Usuário não encontrado'});
    }
 });

 app.patch ('/usuarios/:id', (req,res) => {
    const { id } = req.params;
    const novosDados = req.body;
    const usuario = (usuarios.find(u => u.id === parseInt(id)));

    if (usuario){
      Object.assign(usuario, novosDados);
      res.json ({mensagem: 'Atualizado com Sucesso!', usuario: usuario});
    } else {
      res.status(404).json ({erro: 'Usuário não encontrado'});
    }
 });

app.listen (porta, () => {
    console.log (`Servidor rodando em http://localhost:${porta}`);
})