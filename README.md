# DW1-Service

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A Mongo + Nest.js + Node.js + Typescript app to expose a REST API
with some useful info around the PS1 game Digimon World 1.</p>

# Get started

## Installation

```bash
$ npm install
```

You might need to define `DB_DW1` env value, it should target to a mongo database, on my case, I am using an existing one in atlas mongo, who I am getting populated slowly using the Digimon World 1
info that I get from some guides and some playthrough notes.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Artillery tests

- Go under artillery folder inside this project.
- Install [artillery](https://www.artillery.io/) and artillery-plugin-expect globally.
- Then run by:

```bash
# basic test
$ artillery run -e _env-name_ basic-test.yml
```

## Stay in touch

- Author - [gal16v8d](https://github.com/gal16v8d)

## License

Nest is [MIT licensed](LICENSE).
