# Gerenciamento de Usuários

Este é um projeto de gerenciamento de usuários que utiliza .NET no backend e Angular no frontend. O objetivo é permitir operações CRUD (Create, Read, Update, Delete) sobre os dados dos usuários.

---

## 📚 Tecnologias Utilizadas

- **Backend**: .NET Core 6.0
- **Frontend**: Angular 15
- **Banco de Dados**: SQL Server
- **Comunicação**: RESTful APIs

---

## 🚀 Funcionalidades

- **GET**: Recuperar os dados de um usuário específico.
- **GET ALL**: Listar todos os usuários cadastrados.
- **POST**: Criar um novo usuário.
- **PUT**: Atualizar informações de um usuário existente.
- **DELETE**: Excluir um usuário.

---

## 📂 Estrutura do Projeto

### Backend
O backend foi construído utilizando .NET Core com uma arquitetura limpa e organizada para facilitar a manutenção e escalabilidade.

**Principais Diretórios**:
- `Controllers`: Contém os controladores da API para gerenciar requisições HTTP.
- `Services`: Lógica de negócio para o gerenciamento de usuários.
- `Repositories`: Responsável pela comunicação com o banco de dados.
- `Models`: Classes que representam os dados do sistema (ex.: Usuário).

---

### Frontend
O frontend foi construído em Angular com componentes modulares e reutilizáveis para garantir uma experiência de usuário fluida.

**Principais Diretórios**:
- `src/app/components`: Contém os componentes da aplicação (ex.: listagem, criação, edição de usuários).
- `src/app/services`: Serviços para consumir a API REST e gerenciar dados.
- `src/app/models`: Classes TypeScript para representar os dados do sistema no frontend.

---

## 🔧 Configuração e Execução

### Pré-requisitos
- **Backend**:
  - .NET Core SDK 6.0+
  - SQL Server
- **Frontend**:
  - Node.js 16+
  - Angular CLI 15+

### Página Inicial - Pessoas
![image](https://github.com/user-attachments/assets/8e7838ac-cca5-4ed4-bf30-0e5951ca56bd)


### Formulário de Cadastro
![image](https://github.com/user-attachments/assets/dc3dfb3c-4e2c-4ce0-859b-9b17a3ba7cb1)

### Formulário de Atulização Cadastral
![image](https://github.com/user-attachments/assets/114ba5ef-2b48-4431-8f15-dcb7b25b9fc6)

### Confirmação de Exclusão
![image](https://github.com/user-attachments/assets/2c776ea9-6337-45cd-9f34-eae8ecee2a83)

### Lista de Pessoas com usuário excluído
![image](https://github.com/user-attachments/assets/0439aa5f-f2f4-49f0-9884-a26e1546f41d)




