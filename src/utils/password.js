const bcrypt = require('bcrypt')

async function crypto(password) {
   const salt = await bcrypt.genSalt()
   const anonymPassword = await bcrypt.hash(password, salt)

   return anonymPassword
}


module.exports = {
   crypto,
}