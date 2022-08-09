const express = require('express');

const cors = require('cors');

const morgan = require('morgan');
const { dbConnection } = require('../data/mongo');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;

        //DBCONNECTION
        this.connectionDB();
        
        //MIDDLEWARES
        this.middlewares();
        //ROUTES
        this.routes();
    }

    //middlewares method

    middlewares(){
        this.app.use(express.json());

        this.app.use(cors());

        /* this.app.use(morgan('dev')); */
    }
    
    async connectionDB() {
        await dbConnection();
    }

    //routes method

    routes(){
        this.app.use('/', require('../routes'));
    }

    //listen method
    listen(){
        this.app.listen(this.port, () => console.log(`Server is running on port: ${this.port}`));
    }
}

module.exports = Server;