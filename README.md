# hanako-express
Like Old Hanako but on Express

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
#### Install dependencies
```
    npm install
```
#### Run mongodb container first
```
    docker-compose up
```
#### Then
```
    npx nodemon
```

## Available endpoints
- **GET** /api/anime/
- **GET** /api/anime/id
- **POST** /api/anime/
- **PUT** /api/anime/id
- **DELETE** /api/anime/id



## TODO
- Refactor code