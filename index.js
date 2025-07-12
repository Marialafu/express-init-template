// Server creation and configuration
const http = require("node:http");

//librería nativa de node de file sistems
const fs = require('node:fs/promises')

// Config .env
require("dotenv").config();

//Config DB
require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

//Middleware previo al api routes. 
//Este lo usamos para escribir en fichero.
app.use((req, res, next) => {

    //Texto para incluir en ficheros
    const linea = `Method: ${req.method} Url: ${req.url}`
    fs.appendFile('./main.log', linea)
    next()
})

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(error);
});
