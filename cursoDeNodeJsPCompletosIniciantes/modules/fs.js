const fs = require('fs')
const path = require('path')

// criar uma pasta 
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('erro:', error)

//     }
//     console.log('pasta criada com sucesso')
// })

// criar um arquivo =-=-=-=-=-=-=-=-=-=-=
// fs.writeFile(path.join(__dirname, "/test", "teste.txt"), "hello node", (error) => {
//     if (error) {
//         return console.log("erro: ", error)

    
//     }
//     console.log("o arquivo foi criado com sucesso")
// })


// adicionar a um arquivo
fs.writeFile(path.join(__dirname, 'test.txt' ),
'hello world',
(error) => {
    if (error){
        return console.log('erro: ', error)

    }
        console.log('arquivo modificado com sucesso')

        // ler arquivo
        fs.readFile(path.join(__dirname, '/test', 'teste.txt'), 
        'utf8', 
        (error, data) => {
            if (error){
                return console.log('erro:', error)

            }
        console.log(data)
    })

})


 
