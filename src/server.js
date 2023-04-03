const express = require('express')  
const path = require('path')
const db = require('./database')

const app = express()


//conexão com  o banco de dados
db.connect()


// definindo a template engine estatica
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post
app.use(express.urlencoded({ extended: true }))

// rotas
app.get('/',(req, res)=>{
  res.render('index',{
    title: 'Título teste'
  })
})

//404 error(not found)
app.use((req, res)=>{
  res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port,() => console.log(`Server is listening on port ${8080}`))