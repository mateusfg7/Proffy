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
