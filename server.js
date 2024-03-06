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

app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, '/css.html'));
  //res.send('Hello World!')
})

app.get('/fetch', (req, res) => {
  res.sendFile(path.join(__dirname, '/async.html'));
  //res.send('Hello World!')
})



app.get('/api/getUsers', (req, res) => {

  var users = {"users":[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
  ]}  
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));

})





app.get('/resume', (req, res) => {
    res.send('resume')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})