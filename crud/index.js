const express = require('express')

const server = express();

server.use(express.json())

const cursor = ['FullStack Master', 'desenvolvimento de games', 'programador']

// retorna um curso

server.get('/cursos/index', (req, res) => {
    const { index } = req.params
    
})