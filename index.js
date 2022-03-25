const express = require('express')
const app = express()
const events = require('./events')

const port = process.env.PORT || 3000

app.get('/event/all', (req, res) => {
  res.send({data: events})
})

app.get('/event/:id', (req, res) => {
    const { id } = req.params;
    
    const event = events.find((event) => event.id === Number(id))
    res.send({ data: event || null })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})