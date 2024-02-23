const express = require('express')
const app = express()
const port = 3000

const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    //res.send('Hello World!')
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/script.html'));
    //res.send('Hello World!')
})


app.get('/resume', (req, res) => {
    res.send('resume')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})