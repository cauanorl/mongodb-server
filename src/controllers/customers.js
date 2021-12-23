const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de clientes'

function index(request, response) {
   response.render('register', {
      title: defaultTitle,
   })
}

async function add(request, response) {
   const {
      name,
      age,
      email,
      password,
   } = request.body

   const anonymPwd = await crypto(password)

   const register = new CustomersModel({
      name,
      age,
      email,
      password: anonymPwd,
   })

   register.save()

   response.render('register', {
      title: defaultTitle,
      message: 'Cadastro realizado com sucesso'
   })
}

async function listUsers(request, response) {
   const clients = await CustomersModel.find()

   response.render('listUsers', {
      title: 'Lista de clientes',
      users: clients,
   })
}


module.exports = {
   index,
   add,
   listUsers,
}