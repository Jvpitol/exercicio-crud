Evolução do Projeto
O projeto foi migrado de uma estrutura básica para uma solução robusta utilizando:

Persistência de Dados: Integração com MongoDB via Mongoose.

Middlewares de Erro: Implementação de um manipulador global para capturar e tratar falhas de forma centralizada.

Classes de Erro Personalizadas: Padronização das respostas HTTP (400, 404, 500) para garantir a previsibilidade da API.

🛠️ Tecnologias Utilizadas
Node.js & Express

MongoDB & Mongoose

JavaScript (ES6+)

🏗️ Arquitetura de Tratamento de Erros
A aplicação utiliza um middleware de erro posicionado após todas as rotas, que utiliza o operador instanceof para identificar a origem da exceção:

CastError: Identifica IDs malformados enviados ao MongoDB.

ValidationError: Captura falhas de schema e regras de negócio.

ErroBase / NaoEncontrado: Classes customizadas para respostas limpas ao cliente.
