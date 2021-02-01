const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
const directoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(directoryPath))

app.get('',(req, res)=>{
    res.render('index',{
        title: 'hey siri',
        name: 'Abhishek'
    })
} )

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Kanpur',
        address: req.query.address
    })
})

app.get('/get', (req, res) => {
    res.send('hey there!')
 })

app.listen(port, () => {
    console.log("Server starts at port number.." + port)
})

