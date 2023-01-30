import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()

import UserRoute from './src/routes/user.route.js'

import {database} from './src/database/db.js'
database.connect()

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));



app.listen(port, ()=> console.log('listening on port http://localhost:' + port))

app.use(express.json())
app.use(cors())

//homepage test
app.get('/', (req, res) => {
    res.send('login')
})

// login page
app.use('/login', UserRoute)

// statics pages
app.use('/styles.css', express.static(path.resolve('./styles.css')))
app.use("/src", express.static(path.resolve('./src')))
app.use("/images", express.static(path.resolve('./images')))

