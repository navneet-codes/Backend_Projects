npm init -y => nodejs application initiate

npm i express => intall express package

## API == Application Programming interface , is a set of rules and protocols that allow different applications to communicate and share data with one another

## Types of API

REST
SOAP
GraphQL
gRPC/RPC
WebSocket

## REST api methods

GET => when we want to fetch data from server
POST => when we want to send data to server
PATCH(Partial) => when we want to update already existing data at server
PUT(Replace) => when we want update data at server
DELETE => when we want to delete data from server

## npx nodemon server.js (to run auto update server)

## mongoDB and Mongoose (to perform CRUD operations on DB)

    * mainly do CRUD operation
    * Network access layer used so that only the authorized
      machine with the allowed ip can access the DB server or cluster
    * Database access layer used so that server only give
      allowed access like info according to role or power

## Middlewares

    //middleware to handle cors
    app.use(cors());

    //middleware to read data in json format
    app.use(express.json());

    //middleware to read form-data so it can parse multipart/form-data
    const upload = multer({ storage: multer.memoryStorage() });

## CORS

    Cross Origin Resource Sharing is browsers security system that uses HTTP headers to let a server allow or block webApp from loading resources from different domain or ports

## connected frontend and backend of first project in which we have just to features using axios

    1. Create Post (upload image and caption)
    2. Feed (fetch all posts)

## Authentication

    1. Validation
    2. verification
    3. Authentication
    4. Authorization
