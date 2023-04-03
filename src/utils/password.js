const bcrypt = require('bcrypt')


async function crypto(password){
  const salt = await bcrypt.genSalt()

  const passwordCrypto = await bcrypt.hash(password, salt)

  return passwordCrypto
}

module.exports = {
  crypto
}