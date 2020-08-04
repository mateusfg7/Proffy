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

<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.software-architects.com%2Fcontent%2Fimages%2Fblog%2F2016%2F12%2Ftypescript-logo.png&f=1&nofb=1" width="50" height="30" />
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Ffull%2Fnodejslogo.png&f=1&nofb=1" width="50" height="30" />
<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F97%2FSqlite-square-icon.svg%2F256px-Sqlite-square-icon.svg.png&f=1&nofb=1" width="50" height="30" />
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fknexjs.org%2Fassets%2Fimages%2Fknex.png&f=1&nofb=1" width="80" height="30" />
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeekflare.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fexpress-routing-logo-65137ed3c844d05124dcfdab28263c21-ec9c1-e1554576195344.png&f=1&nofb=1" width="80" height="30" />

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
