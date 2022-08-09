const { Router } = require('express');

const router = Router();

const fs = require('fs')

const PATH_ROUTES = __dirname;

const removeExtention =  (filename) => {
    return filename.split('.').shift();

}


fs.readdirSync(PATH_ROUTES).filter( file => {

    const name = removeExtention(file);

    if(name != 'index'){
        router.use(`/${name}`, require(`./${file}`))
    }

    router.get('/', (req, res) => res.send('INDEX'));
})

module.exports = router;