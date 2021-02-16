const express = require('express')
const bodyParser = require('body-parser')

const peopleController = require('./controllers/peopleController')

const app = express()

app.use(bodyParser.json())

app.use('/people', peopleController);

const PORT = 3000
app.listen(PORT, () => {
  console.log('listening on port: ${PORT}');
})