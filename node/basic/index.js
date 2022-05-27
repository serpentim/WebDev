import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.urlencoded())
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.get('/', (req, res) => {
    res.render('index', {name: 'Tim', mainTitle: 'Index'})
})

app.get('/about', (req, res) => {
    res.render('about', {mainTitle: 'About Us'})
})

const users = [
    {
        id: 1,
        name: "Ivan",
        surname: "Ivanov",
        job: "Hacker"
    },
    {
        id: 2,
        name: "Petr",
        surname: "Petrov",
        job: "CEO",
        age: 55
    }
]

app.get('/users', (req, res) => {
    res.render('users', {mainTitle: 'Users', users: users})
})

app.get('/users/:user_id', (req, res) => {
    const user = users.find((us) => us["id"] === parseInt(req.params["user_id"]))
    res.render('user', {mainTitle: 'user'})
})

app.post('/search', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('express app!!!')
})