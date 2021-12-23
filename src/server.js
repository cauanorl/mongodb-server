// CRUD --- Create Read Update Delete
// As quatros operações basicas de um banco de dados
const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

// Conexão com banco de dados
db.connect()

// Definindo a template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))  // NÃO ENTENDI

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilitando o server a receber dados via post (Formulários)
app.use(express.urlencoded({ extended: true }))

// definindo rotas
app.use('/', routes)

// Erro 404 (page not found)
app.use((request, response) => {
   response.send('Pagina não encontrada')
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
