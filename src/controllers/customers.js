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

async function formEdit(request, response) {
   const { id } = request.query

   const user = await CustomersModel.findById(id)

   response.render('editUsers', {
      title: 'Editar clientes',
      user
   })
}

async function edit(request, response) {
   const {
      name,
      age,
      email,
   } = request.body

   const { id } = request.params

   const user = await CustomersModel.findById(id)

   user.name = name
   user.age = age
   user.email = email

   user.save()


   response.render('editUsers', {
      title: 'Editar clientes',
      user
   })
}

async function remove(request, response) {
   const { id } = request.params

   const remove = await CustomersModel.deleteOne({ _id: id })

   if (remove.ok) {
      response.redirect('listUsers')
   }
}

module.exports = {
   index,
   add,
   listUsers,
   formEdit,
   edit,
   remove,
}
