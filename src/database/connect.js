const mongoose = requiere('mongoose')


const connectToDatabase = async () => {
    await mongoose.connect('mongodb+srv://admin:<password>@cluster0.gkv9qrw.mongodb.net/?retryWrites=true&w=majority', (error) => {
        if (error) {
            return console.log('erro ao se conectar')

        }
        return console.log('conexao ao banco de dados realizada com sucesso')
    })
}



module.exports = connectToDatabase;