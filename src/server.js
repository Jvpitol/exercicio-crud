import 'dotenv/config';
import express from 'express';
import conectaNaDatabase from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import manipuladorDeErros from './Middlwares/manipuladorDeErros.js';
import manipulador404 from './Middlwares/manipulador404.js';


const app = express();
const PORT = 3000;

try {
  const conexao = await conectaNaDatabase();

  conexao.on('error', (erro) => {
    console.error('Erro de conexão pós-inicialização:', erro);
  });

  conexao.once('open', () => {
    console.error('Conexão com banco de dados feita com sucesso');
  });
} catch (erro) {
  console.error('Falha fatal ao conectar ao banco:', erro);
  process.exit(1);
}

// Rota básica '/'
app.get ('/', (req,res) => {
  res.status(200).send('O Servidor está vivo e respondendo!');
});

app.use(express.json());
app.use(usuarioRoutes);

app.use(manipulador404);

app.use(manipuladorDeErros);
 
app.listen (PORT, () => {
  console.log (`Servidor rodando em http://localhost:${PORT}`);
});