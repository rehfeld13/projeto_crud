const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//rota principal
router.get('/', IndexController.index)

//rota para registrar cliente
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//rota para listar clientes
router.get('/list', CustomersController.list)

//rota para editar clientes
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)


//rota para apagar clientes
router.get('/remove', CustomersController.remove)

module.exports = router