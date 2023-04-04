
const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

 function index(req,res){
    const { c } = req.query
    
    res.render('register',{
      title: 'Cadastro de Clientes',
      cadastrado: c
    })
  }

 async function add(req, res){
  const {
    name,
    age,
    email,
    password,
  } = req.body


  const passwordCrypto =  await crypto(password)
  
  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()

  res.redirect('/register?c=1')
}

 async function list(req,res){
  const clients = await CustomersModel.find()

  res.render('listUsers',{
    title:'Listagem de clientes',
    clients,
  })
}

module.exports = {
  add,
  index,
  list,
}