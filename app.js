const express = require('express')
const { engine } =require('express-handlebars')
const app = express()
const port = 3000
const generatePassword = require('./main')


app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

//use body-parser
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/',(req,res)=>{
    const data = req.body
    const password = generatePassword(data)
    res.render('index', {password: password , data: data})
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})