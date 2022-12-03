const express = require("express")
const UserModel = require('../src/models/user.modul')

const app = express()
app.use(express.json())


app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1> hello world / ola mundo </h1>')

})

// pegar todos os usuarios
app.get('/users', async(req, res) => {
    try {
        const users = await UserModel.find({})

        res.status(200).json(users)

    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// buscar usuario por id
app.get('/users/:id', async (req, res) => {
    try {
         const id = req.params.id
        const user = await UserModel.findById(id)
        res.status(200).json(user)
         
    } catch (error) {
        res.status(500).send(error.message)

    }
})

// criar usuario
app.post('/users', async (req, res) => {
    try  {
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }


})
const port = 8081
app.listen(port, () => console.log('funcionando com express na porta', port))
