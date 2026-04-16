import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const routes = express.Router();

routes.get('/usuarios', UsuarioController.listarUsuarios);
routes.get('/usuarios/:id', UsuarioController.listarUsuarioPorId);
routes.post('/usuarios', UsuarioController.adicionarUsuario);
routes.delete('/usuarios/:id', UsuarioController.deletarUsuario);
routes.put('/usuarios/:id', UsuarioController.alterarParteUsuario);
routes.patch('/usuarios/:id', UsuarioController.alterarUsuarioCompleto);


export default routes;