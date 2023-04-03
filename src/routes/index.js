const router = require('express').Router()

router.get('/',(req, res)=>{
  res.render('index',{
    title: 'Título teste'
  })
})

module.exports = router