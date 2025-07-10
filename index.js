// Server creation and configuration
const http = require("node:http");
const app = require("./src/app");

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

//Middleware previo al api routes
app.use((req, res, next) => {
    console.log(new Date());

    
    next()
})

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(error);
});
