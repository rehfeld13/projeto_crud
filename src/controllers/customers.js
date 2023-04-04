
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
  const { e } = req.query
  const clients = await CustomersModel.find()

  res.render('list',{
    title:'Listagem de clientes',
    clients,
    editado: e
  })
}

 async function formEdit(req,res){
  const { id } = req.query

   const user = await CustomersModel.findById(id)

  res.render('edit',{
    title: 'Editar usuário',
    user,
  })
}

 async function edit(req,res){
  const {
    name,
    age,
    email,
  } = req.body

  const { id } = req.params

  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email

  user.save()

  res.redirect('/list?e=1')


}


module.exports = {
  add,
  index,
  list,
  formEdit,
  edit
}