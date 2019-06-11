const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Serving up crits at ${PORT}`)
})
