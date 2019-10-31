const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const postCharge = require('./stripe')
require('dotenv').config()

const app = express()
const router = express.Router()
const port = process.env.PORT || 7000

router.post('/stripe/charge', postCharge)
router.all('*', (_, res) =>
  res.json({ message: 'please make a POST request to /stripe/charge' })
)

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

app.listen(port, () => console.log(`server running on port ${port}`))

module.exports = app
