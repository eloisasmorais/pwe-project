### Projeto WEB 

## Instalação 

- Na pasta front-end: comando `yarn`

### Link do FIGMA 

Para visualizar as telas do projeto mais rapidamente clique [aqui](https://www.figma.com/file/yfh4EwR3GUfJVPAP50rgE1/Projeto-PWE?node-id=0%3A1) 

### Rotas Front-end

- http://localhost:3000/
- http://localhost:3000/login
- http://localhost:3000/dashboard
- http://localhost:3000/vote

### Endpoints Back-end

- http://localhost:8080/backend/categorias 
  - STATUS: `finalizado`
    - GET - lista de categorias 
    - POST - cadastro de uma ou mais categorias
- http://localhost:8080/backend/jogos
    - STATUS: `finalizado`
    - GET - lista de jogos cadastrados
    - POST - cadastro de um ou mais jogos 
- http://localhost:8080/backend/votar
  - STATUS: `pendente`
      - GET - total de votos, votos por jogo, votos por categoria
      - POST - registro dos votos
  - http://localhost:8080/backend/account
    - STATUS: `pendente`
        - GET - dados do usuário
        - POST - registro de usuário
  - http://localhost:8080/backend/login
    - STATUS: `pendente`
        - POST - login do usuário

### O que faltou fazer: 
- Amarrar jogos nas categorias (tela gerenciar)
- Calcular resultado parcial da votação
- Delegar algumas tarefas para o banco de dados (calculos de resultados totais e parciais)
- Login: dei preferencia a tentar fazer funcionar a funcionalidade principal do projeto 
- Documentação decente
- Retirar arquivos que não foram utilizados

### O que eu aprendi

- Utilizar minimamente o Gson
  - Criação de adapters para processamento de objetos mais complexos `(backend/votar/CategoriaAdapter.java)` 
- Configuração do projeto para habilitar CORS em chamadas da API REST

### Dificuldades 
- Java e orientação a objetos no geral 
- Documentação oficial muito confusa 
- Utilização do gson 

