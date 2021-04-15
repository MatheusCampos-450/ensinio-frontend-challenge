# Teste técnico para Desenvolvedor(a) Front-end junior na Ensinio

## Tecnologias utilizadas para o desenvolvimento do projeto
 <p align="left">
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" heigth="40"/> 
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="react" width="40" heigth="40"/>
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" width="40" heigth="40"/>
</p>  

## Requisitos para rodar o projeto:
- **Git** (<a href="https://git-scm.com/downloads" target="blank">Download Git</a>)
- **Node.js** (<a href="https://nodejs.org/en/" target="blank">Download Git</a>) versão LTS
- **Yarn** (<a href="https://classic.yarnpkg.com/en/docs/install/#debian-stable" target="blank">Download Git</a>) Instale primeiro o Node.JS

## Rodando o projeto

1º - No terminal, digite o seguinte comando para clonar o repositório git.
```bash
git clone "https://github.com/MatheusCampos-450/ensinio-frontend.git"
```

2º - Acesse a pasta na qual você clonou o repositório e digite o seguinte comando para baixar as dependências do projeto.
```bash
yarn
```

3º - O projeto utiliza de uma API fictícia para realizar as requisições HTTP. Essa API é construída usando a ferramenta **json-server** e para colocar em funcionamento use o comando abaixo numa nova aba do terminal.
```bash
yarn json-server src/services/db.json -p 3333
```

4º - Por fim, agora basta dar o comando abaixo para que o projeto execute na sua máquina.
```bash
yarn start
```
