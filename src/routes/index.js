const router = require('express').Router()

const CustomersController = require('../controllers/customers')

// ROTAS
router.get('/', function(request, response) {
   response.render('index', {
      title: 'Titulo teste'
   })
})

router.get('/register', function(request, response) {
   response.render('register', {
      title: 'Registro'
   })
})

router.post('/register/add', CustomersController.add)


module.exports = router