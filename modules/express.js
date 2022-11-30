const express = require("express")


const app = express()


app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1> hello world / ola mundo </h1>')

})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'jonas',
            email: 'jonas@email.com',
        },
        {
            name: 'marcos nava',
            email: 'marcos.nava@email.com',
        },
    

    ]
    res.status(200).json(users)
})
const port = 8081
app.listen(port, () => console.log('funcionando com express na porta', port))
