const mongoose = require('mongoose')



const connectToDatabase = async () => {
    await mongoose.connect('mongodb+srv://admin:bancodedados@cluster0.gkv9qrw.mongodb.net/?retryWrites=true&w=majority', 
    (error) => {
        console.log('username', process.env.MANGO_USERNAME)
        console.log('pass', process.env.MANGO_PASSWORD)

        if (error) {

            return console.log('erro ao se conectar: ', error)

        }
        return console.log('conexao ao banco de dados realizada com sucesso')
    }
)
}


module.exports = connectToDatabase