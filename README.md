Node.js CRUD: Fundamentos de API REST
Este repositório contém uma implementação prática de uma API utilizando Node.js e Express. O foco do projeto foi o domínio do ciclo completo de um CRUD (Create, Read, Update, Delete) e a compreensão profunda da semântica dos métodos HTTP.

🧠 Contexto do Projeto
Este código foi desenvolvido como parte dos meus estudos de back-end, conectando a lógica de programação à agência do usuário e aos conceitos de imersão em ambientes digitais (temas que exploro na minha pesquisa acadêmica sobre narrativas em jogos eletrônicos).

🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução.

Express: Framework para gestão de rotas e requisições.

JavaScript (ES6+): Lógica de manipulação de dados em memória.

Postman: Ferramenta de teste de API.

📋 Funcionalidades Implementadas
O servidor gerencia um array de usuários através das seguintes rotas:

GET /usuarios: Lista todos os usuários.

POST /usuarios: Adiciona um novo usuário (envio via req.body).

DELETE /usuarios/:id: Remove um usuário específico via parâmetro de rota (req.params).

PUT /usuarios/:id: Substitui integralmente os dados de um usuário.

PATCH /usuarios/:id: Atualização parcial utilizando Object.assign para modificar apenas campos específicos.

🗝️ Diferenciais Técnicos
Tratamento de tipos: Uso de parseInt para garantir a integridade nas comparações de IDs.

Status Codes: Implementação de respostas HTTP apropriadas (201 para criação, 404 para recursos não encontrados).

Semântica REST: Distinção clara entre o uso de PUT e PATCH.

Como rodar o projeto
Clone o repositório.

Execute npm install para instalar as dependências.

Inicie o servidor com node index.js.

O servidor estará rodando em http://localhost:3000.
