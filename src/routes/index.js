const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// ROTAS
router.get('/', IndexController.index)

// Registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// Listar usuários
router.get('/list',CustomersController.listUsers)

// Editar clientes
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

router.get('/remove/:id', CustomersController.remove)


module.exports = router
