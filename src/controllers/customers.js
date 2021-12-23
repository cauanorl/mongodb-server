const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')


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

   response.send('Cadastro realizado')
}


module.exports = {
   add,
}