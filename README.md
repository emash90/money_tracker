<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Backend Money tracker APIs built using nestJs. Includes auth endpoints to register/login users and also view profile for a single user, expenses and income endpoints (to create, read, update and delete expenses/incomes) and also wallets endpoints to create, read update and delete wallets. A user can have more than one wallet.

## Installation

clone the repo to your local 

open the project folder in you favourite IDE

create a config folder in the src directory and create a file with a .ts extension in the config folder

copy the following 

```bash
export default {
    mongoURI: 'YOUR MONGO URI LINK'
}
```
replace the string 'YOUR MONGO URI LINK' with your own MONGODB URI

run npm install in the terminal

```bash
$ npm install
```

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

## Stay in touch

- Author - [Edwin Kairu]


## License

Nest is [MIT licensed](LICENSE).
