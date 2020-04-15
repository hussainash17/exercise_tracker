const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongodb connected succesfully')
}).catch((err) => {
    console.log(err)
})

const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)


app.get('/',(req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('Server started on port:' +port)
})
