import NaoEncontrado from '../erros/NaoEncontrado.js';
import usuario from '../models/usuarios.js';

class UsuarioController {
  // GET - Listar todos
  static listarUsuarios = async (req, res, next) => {
    try {
      const listadeUsuarios = await usuario.find({});
      res.status(200).json(listadeUsuarios);
    } catch (erro) {
      next(erro);
    }
  };

  // GET - Por ID
  static listarUsuarioPorId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuarioEncontrado = await usuario.findById(id);

      if (usuarioEncontrado) {
        res.status(200).send(usuarioEncontrado);
      } else {
        next(new NaoEncontrado('Usuário não encontrado. Verifique o ID'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // POST - Adicionar
  static adicionarUsuario = async (req, res, next) => {
    try {
      const novoUsuario = await usuario.create(req.body);
      res.status(201).json({ mensagem: 'Usuário adicionado com sucesso!', usuario: novoUsuario });
    } catch (erro) {
      next(erro);
    }
  };

  // DELETE - Remover
  static deletarUsuario = async (req, res, next) => {
    try {
      const { id } = req.params;
      const resultado = await usuario.findByIdAndDelete(id);
      
      if (resultado) {
        res.status(200).send('Usuário deletado com sucesso!');
      } else {
        next(new NaoEncontrado('Usuário não encontrado. Verifique o ID'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // PATCH - Alterar Parte
  static alterarParteUsuario = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const usuarioAtualizado = await usuario.findByIdAndUpdate(id, { nome }, { new: true });
      if (usuarioAtualizado) {
        res.status(200).json({ mensagem: 'Atualizado com Sucesso!', usuario: usuarioAtualizado });
      } else {
        next(new NaoEncontrado('Usuário não encontrado. Verifique o ID'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // PUT - Alterar Completo
  static alterarUsuarioCompleto = async (req, res, next) => {
    try {
      const { id } = req.params;
      const novosDados = req.body;
      const usuarioAtualizado = await usuario.findByIdAndUpdate(id, novosDados, { new: true });
      if (usuarioAtualizado){
        res.status(200).json({ mensagem: 'Atualizado com Sucesso!', usuario: usuarioAtualizado });
      } else {
        next(new NaoEncontrado('Usuário não encontrado. Verifique o ID'));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default UsuarioController;