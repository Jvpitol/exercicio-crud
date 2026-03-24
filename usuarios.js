// Maneira que o mongoose cria Schama e Models
// Modelo => objeto que representa uma coleção na base de dados

import mongoose from "mongoose";   

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    email: { type: String },
    interesse: { type: [String] },
    data_cadastro: { type: Date }
}, { versionKey: false });

const usuario = mongoose.model('usuarios', usuarioSchema, 'Usuarios');
export default usuario;