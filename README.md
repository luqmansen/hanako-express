# Hanako express
Like old Hanako but on Express

[![Heroku-CI](https://github.com/luqmansen/hanako-express/workflows/Heroku-CI/badge.svg)](https://github.com/luqmansen/hanako-express/actions?query=workflow%3AHeroku-CI)

## Demo
http://hanako-express.herokuapp.com/

## Requirement
### Tools
- npm
- docker
- docker-compose

### .env
Setup .env file
```
MONGODB_URL=mongodb://username:pass@host:27017/dbname
PORT=3000
```
if you are using docker compose, change host to `mongodb`

## Run
#### Using Docker Compose
```
docker-compose up
```
#### Manual
1. Install dependencies
  ```
  npm install
  ```
2. Run mongodb container only
  ```
  docker-compose up -d mongodb
  ```
3. Run the app (using nodemon)
  ```
  npx nodemon
  ```

## Available endpoints
- **GET** /api/animes/
 optional param
  - limit
  - title
  - type
- **GET** /api/anime/:id
- **POST** /api/anime/
- **PUT** /api/anime/:id
- **DELETE** /api/anime/:id

## TODO
- Refactor code
