const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('<h1> home page / pagina inicial')
        
    }
})

server.listen(port, () => console.log('funcionando na porta', port) )
