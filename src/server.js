// CRUD --- Create Read Update Delete
// As quatros operações basicas de um banco de dados
const express = require('express')
const path = require('path')

const app = express()


// Definindo a template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilatando o server a receber dados via post (Formulários)
app.use(express.urlencoded({ extended: true }))

// ROTAS
app.get('/', function(request, response) {
   response.render('index', {
      title: 'Titulo teste'
   })
})

// Erro 404 (page not found)
app.use((request, response) => {
   response.send('Pagina não encontrada')
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
