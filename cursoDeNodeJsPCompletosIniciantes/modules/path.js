const { dirname } = require('path')
const path = require('path')


// basename
console.log(path.basename(__filename))

//nome do diretorio atual
console.log(path.dirname(__filename))

// extensão do arquivo
console.log(path.extname(__filename))

// criar objeto path
console.log(path.parse(__filename))

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'))
