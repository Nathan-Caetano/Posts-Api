# Social Media API

Essa é uma API desenvolvida com Node.js e Express, que permite o gerenciamento de posts para uma rede social. Cada post contém uma descrição, uma URL de imagem e um identificador único. O MongoDB é utilizado como banco de dados.

## Funcionalidades

- **Obter posts**: Retornar todos os posts cadastrados.

    *Mais funcionalidades vindo ai. . .*

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/social-media-api.git
   cd social-media-api

2. Instale as dependências:
    ```bash
    npm install

3. Configure variáveis de ambiente: Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    ```env
    STRING_CONEXAO = sua_chave_de_conexão_com_mongodb

4. inicie o servidor:
    ```bash
    node server.js

Assim o servidor ficará disponível em: http://localhost:3000

## Rotas da API

1. Obter posts: /posts

- Descrição: Retorna uma lista de todos os posts.
- Resposta (200 OK):

    ```json
    [
    {
        "id": "123456",
        "description": "Texto do post",
        "imageUrl": "http://example.com/imagem.jpg"
    }
    ]

Mais rotas por vir. . .