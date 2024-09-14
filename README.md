# 🚗 API de Gestão de Carros com JavaScript e Node.js

Este projeto foi desenvolvido para gerenciar informações de carros, permitindo a criação, leitura, atualização e exclusão (CRUD) de dados através de uma API. As operações são feitas utilizando **JavaScript** no frontend e **Node.js** no backend, com requisições HTTP via **Fetch API**.

## 📋 Funcionalidades

- **Cadastrar Carro (POST)**: A API permite que o usuário crie novos registros de carros, enviando informações como marca, modelo, categoria, ano, quilometragem e valor. Utilizando uma requisição do tipo POST, os dados são convertidos para JSON e armazenados no servidor, possibilitando a persistência dos dados.
  
- **Listar Carros (GET)**: Com uma requisição GET, a API recupera todos os carros cadastrados e apresenta as informações detalhadas de cada um. Esta função permite que os usuários tenham acesso completo a todos os registros armazenados no banco de dados.

- **Buscar Carro por ID (GET)**: Permite ao usuário buscar os detalhes de um carro específico pelo seu ID. Através de uma requisição GET, a API retorna as informações detalhadas do carro correspondente, possibilitando uma busca mais precisa e direcionada.

- **Atualizar Carro (PUT)**: Com uma requisição PUT, o usuário pode modificar as informações de um carro já cadastrado, utilizando o ID do carro. Essa função permite que os dados de qualquer campo sejam alterados e posteriormente atualizados na base de dados.

- **Deletar Carro (DELETE)**: A API também permite a remoção de carros da base de dados através de uma requisição DELETE. O carro correspondente ao ID informado é excluído permanentemente, garantindo que dados irrelevantes ou desatualizados sejam removidos.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada no frontend para interagir com a API.
- **Node.js**: Ambiente de execução no backend que processa as requisições e respostas.
- **Fetch API**: Utilizada para realizar as requisições HTTP (GET, POST, PUT, DELETE).
- **APIGenerator**: Ferramenta usada para criar endpoints da API REST e armazenar os dados.
- **Inquirer**: Biblioteca de prompts interativos usada para facilitar a coleta de informações no terminal.

## 🚀 Detalhes das Operações

### 1. **Cadastrar Carro**
A funcionalidade de cadastro de carro utiliza uma requisição **POST** para enviar dados para a API. O usuário insere os detalhes do carro (marca, modelo, etc.), e esses dados são convertidos para JSON e enviados para o servidor. O servidor armazena essas informações e retorna uma confirmação de sucesso.

### 2. **Listar Carros**
A listagem de carros é feita por uma requisição **GET**, que recupera todos os carros registrados no sistema. A resposta da API vem no formato JSON contendo uma lista completa dos carros, que é exibida ao usuário, permitindo visualizar todos os dados.

### 3. **Buscar Carro por ID**
A busca por ID é implementada utilizando uma requisição **GET**, onde o ID do carro é inserido na URL da requisição. A API retorna as informações detalhadas do carro correspondente ao ID especificado, facilitando a visualização de um único registro.

### 4. **Atualizar Carro**
Para modificar as informações de um carro existente, o sistema utiliza uma requisição **PUT**. O ID do carro é utilizado para identificar o registro a ser atualizado, e as novas informações são enviadas no corpo da requisição no formato JSON. A API processa a atualização e retorna a confirmação.

### 5. **Deletar Carro**
A remoção de um carro do sistema é feita através de uma requisição **DELETE**. Ao fornecer o ID do carro na URL, o sistema localiza o carro correspondente e o exclui da base de dados. Após a exclusão, a API confirma a operação.

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- **Node.js**: Certifique-se de que o Node.js está instalado no seu sistema.

### Passos para executar:
1. **Clonar o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/api-gestao-carros.git
    ```

2. **Navegar até o diretório do projeto**:
    ```bash
    cd api-gestao-carros
    ```

3. **Executar as funcionalidades**:
    - Para cadastrar um carro, acione a funcionalidade POST com as informações do carro.
    - Para listar os carros, utilize a funcionalidade GET e visualize todos os registros.
    - Para buscar por ID, use o GET específico com o ID desejado.
    - Para atualizar, utilize o PUT e forneça o ID e os novos dados do carro.
    - Para deletar, utilize o DELETE e informe o ID do carro que deseja remover.

## 🎯 Objetivos

Este projeto tem como principal objetivo a prática e consolidação dos conceitos fundamentais de **CRUD** (Create, Read, Update, Delete) utilizando **JavaScript** e **Node.js**. Além disso, oferece uma oportunidade para explorar conceitos importantes de programação assíncrona, como **Promises**, **async/await**, e manipulação de **APIs REST**.

Através da implementação de funções como **fetch()** para realizar requisições HTTP, os seguintes conceitos foram abordados:
- Manipulação de dados com **Fetch API**.
- Uso de métodos HTTP (GET, POST, PUT, DELETE).
- Armazenamento e gerenciamento de dados em formato **JSON**.
- Interação com servidores externos para manipulação de dados.

Este projeto demonstra o entendimento prático de backend, utilizando APIs para realizar operações CRUD. 
