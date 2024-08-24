<h1 align="center">💬  Message board </h1>

Um quadro de mensagens simples, criado com node.js, typescript, react e tailwindcss. Uso PostGreSQL como banco de dados

##### :point_right: [ Project Live ](https://jhenriquem.github.io/message-board/) or [ API Link ](https://message-board-v7pz.onrender.com/api/messages/)

---

## 🌐 API

Todo o código da API estar na pasta server e na branch [server](https://github.com/jhenriquem/message-board/tree/server)

### 📋 Funcionalidades e características

- Uso da arquitetura REST
- Toda a API foi criada no ambiente node.js/express com typescript
- PostgreSQL para armazenar os dados

### 🚩 Endpoints

#### GET `/api/messages/`

Obtém todas as mensagens já enviadas

Exemplo de resposta:

```json
{
  "statusMessage": "Success",
  "data": [
    {
      "id": 17,
      "username": "henrique",
      "message": "olá",
      "date": "2024-08-24"
    }
  ]
}
```

#### POST `/api/messages/`

Adicionar uma nova mensagem

Requer um corpo JSON com os seguintes campos:

- `id`: um id aleatório
- `username` : nome do usuário
- `message` : mensagem
- `date` : data do post

Exemplo de resposta:

```json
{
  "statusMessage": "Success"
}
```

#### ❌ Se houver um erro

Se houver algum erro interno na API

Exemplo de resposta:

```json
{
  "statusMessage": "Error",
  "error": "error message"
}
```
