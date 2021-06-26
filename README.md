# NLW Valoriza

<p align="center">
<img src="logo.png"/>
</p>

Projeto criado durante o evento Next Level Week da RocketSeat.

## Features

- Cadastro de usuários
- Autenticação via JWT
- Usuários admin podem cadastrar tags de elogios
- Um usuário autenticado pode criar um elogio para outro usuário e adicionar uma tag, como `#inspiração`

## Milha extra

- Uso do postgres como banco de dados ao invés do sqlite
- Criação de contêineres para deploy, usando docker e docker-compose
- Aplicação deployada com nginx em um contêiner como proxy reverso
- Deploy feito em um vps da digital ocean no seguinte ip: <http://157.245.210.241>
- Criação de pipeline de integração contínua para deploy automatizado usando github actions
