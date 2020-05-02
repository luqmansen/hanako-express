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
- **GET** /api/anime/
- **GET** /api/anime/:id
- **POST** /api/anime/
- **PUT** /api/anime/:id
- **DELETE** /api/anime/:id


## Deployment
### Heroku
#### Requirement
- Heroku-CLI

#### Step
1. Create new app and API key
```
heroku create APP_NAME
heroku authorization:create
```
2. Setup secret on repo setting, add `HEROKU_APP_NAME` and `HEROKU_API_KEY` 
3. Push to master, and wait for deployment :D


## TODO
- Refactor code
