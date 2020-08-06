<!-- VARS -->

[logo-url]: https://camo.githubusercontent.com/74c8681f6d4521903b63e79173a72f0b849243be/68747470733a2f2f692e696d6775722e636f6d2f73356c546465502e706e67
[web-badge]: https://img.shields.io/badge/WEB-6842C2?logo=typescript&logoColor=47248F&label=Proffy&labelColor=6842C2&style=for-the-badge
[backend-badge]: https://img.shields.io/badge/BACKEND-04D361?logo=Node.js&logoColor=03A14A&label=Proffy&labelColor=04D361&style=for-the-badge
[mobile-badge]: https://img.shields.io/badge/MOBILE-494949?logo=react&logoColor=161616&label=Proffy&labelColor=494949&style=for-the-badge

<!-- VARS -->

<div align="center">

# ![Proffy][logo-url]

### Plataforma de estudos online, onde é possivel conectar alunos com professores.

[![web][web-badge]](#web)
[![backend][backend-badge]](server)
[![mobile][mobile-badge]](mobile)

![](.github/docs/img/landing.svg)

</div>

---

O Proffy é um projeto que esta sendo desenvolvido durante a **Next Level Week #2** da [@Rocketseat](https://github.com/Rocketseat), durante os dias _3 à 7 de Agosto de 2020_.

Este projeto esta sendo codado na trilha OmniStack, que desenvolve a stack JavaScript completa, do zero, criando as versões Web, Mobile e Back-End da aplicação.

> [Anotações - NOTES.md](NOTES.md)

---

<div align="center">

# _**WEB**_

</div>

A versão web da aplicação fei desenvolvida usando a metodologia _mobile first_, em que a aplicação é pensada primeiramente para dispositivos mobile, e depois é adaptada para dispositivos desktops.

Foi usada as tecnologias [**React**](https://reactjs.org/) e [**Typescript**](https://www.typescriptlang.org/) para o desenvolvimento da aplicação web.

<img src=".github/docs/screenshots/web/home.png" width="600" />

<img src=".github/docs/screenshots/web/study.png" width="300" height="500" /> <img src=".github/docs/screenshots/web/cadastro.png" width="300" height="500" >

> O código fonta da aplicação web esta na pasta [`web/`](web/)

## Instalar dependencias

<details>
  <summary><i>com <strong>npm</strong><i></summary>
  
  ```bash
  $ npm install
  ```
</details>
<details>
  <summary><i>com <strong>yarn</strong><i></summary>
  
  ```bash
  $ yarn
  ```
</details>

## Iniciar aplicação

<details>
  <summary><i>com <strong>npm</strong><i></summary>
  
  ```bash
  $ npm start
  ```
</details>
<details>
  <summary><i>com <strong>yarn</strong><i></summary>
  
  ```bash
  $ yarn starts
  ```
</details>

---

<div align="center">

# ![Proffy](https://camo.githubusercontent.com/74c8681f6d4521903b63e79173a72f0b849243be/68747470733a2f2f692e696d6775722e636f6d2f73356c546465502e706e67)

### _Servidor **API**_

O servidor da aplicação foi desenvolvido seguindo a metodologia _API Rest_ para poder ser reaproveitada tanto na web quando em dispositivos mobile.

Foi usada as tecnologias [**NodeJS**](https://nodejs.org/) com [**Typescript**](https://www.typescriptlang.org/), banco de dados [**SQLite3**](https://sqlite.org/) com query builder [**Knex**](http://knexjs.org/), e o framework [**Express**](http://expressjs.com/), no desenvolvimento da API Rest.

</div>

---

## **Funcionalidades**

### Conexões

- _Rota para lista o total de conexões realisadas._
- _Rota para criar uma nova conexão._

### Aulas

- _Rota para criar uma aula._
- _Rota para listar aulas._
  - _Filtrar por matéria, dia da semana, e horário._

## **Configurações Iniciais**

### Instalar dependencias

_yarn_

```bash
$ yarn
```

_npm_

```bash
$ npm install
```

### Criar banco de dados

_yarn_

```bash
$ yarn knex:migrate
```

_npm_

```bash
$ npm knex:migrate
```

> _src/database/database.sqlite_

### Iniciar servidor

_yarn_

```bash
$ yarn start
```

_npm_

```bash
$ npm start
```

> _http://localhost:3333_

---

<div align="center">

<table style="border: 1px solid red;">
<tr align="center">

<td><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffacebook.github.io%2Freact%2Ffavicon.ico&f=1&nofb=1" width="30" height="30" /></td>
<td><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.software-architects.com%2Fcontent%2Fimages%2Fblog%2F2016%2F12%2Ftypescript-logo.png&f=1&nofb=1" width="30" height="30" /></td>
<td><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F97%2FSqlite-square-icon.svg%2F256px-Sqlite-square-icon.svg.png&f=1&nofb=1" width="40" height="30" /></td>
<td><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Ffull%2Fnodejslogo.png&f=1&nofb=1" width="40" height="30" /></td>
<td><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fknexjs.org%2Fassets%2Fimages%2Fknex.png&f=1&nofb=1" width="80" height="30" /></td>
<td><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeekflare.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fexpress-routing-logo-65137ed3c844d05124dcfdab28263c21-ec9c1-e1554576195344.png&f=1&nofb=1" width="80" height="30" /></td>
<td></td>
<td></td>

</tr>
</table>

<table>
  <tr align="center">
    <td>Coded By</td><td>Instrutor</td>
  </tr>
  <tr align="center">
    <td>
      <a href="https://github.com/mateusfg7">
        <img src="https://avatars1.githubusercontent.com/u/40613276?v=4" width 
        ="100" />
      </a>
    </td>
    <td>
      <a href="https://github.com/diego3g">
        <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" width 
        ="100" />
      </a>
    </td>
  </tr>
</table>

</div>
