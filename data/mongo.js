const mongoose = require('mongoose')


const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGO_CONN);
        console.log("Conexión existosa...!")
        
    } catch (error) {
        console.log(error)
        throw new Error (`Ocurrió un error ${error}`)
    }

}

module.exports = {
    dbConnection
}