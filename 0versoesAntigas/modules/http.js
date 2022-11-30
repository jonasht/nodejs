const http = require('http')

// const port = 8080
const port = 1024

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('<h1> home page / pagina inicial</h1>')

        
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'jonas',
                email: 'jonas@email.com',
            },
            {
                name: 'marcos nava',
                email: 'marcos.nava@email.com',
            },
        

        ];
        res.writeHead(200, {"Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    };
})

server.listen(port, () => console.log('funcionando na porta', port) )
