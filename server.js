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


const emails = [
  {
    id: 1,
    subject: "Weekly team meeting",
    from: "john.doe@example.com",
    to: ["jane.doe@example.com"],
    body: "Hi Jane,\n\nJust a quick reminder about this week's team meeting. Here's the agenda:\n\n1. Project updates\n2. Upcoming deadlines\n3. Open discussion\n\nSee you there!\n\nBest,\nJohn"
  },
  {
    id: 2,
    subject: "Re: Weekly team meeting",
    from: "jane.doe@example.com",
    to: ["john.doe@example.com"],
    body: "Hi John,\n\nThanks for the reminder! I've added the meeting to my calendar.\n\nBest,\nJane"
  },
  {
    id: 3,
    subject: "New feature proposal",
    from: "sales@example.com",
    to: ["support@example.com"],
    body: "Hi Support,\n\nWe're thinking of adding a new feature to our product and we'd love to get your feedback.\n\n[Insert feature description here] \n\nWhat do you think?\n\nBest,\nSales"
  }
];


app.get('/api/getEmails', (req, res) => {  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(emails));

})





app.get('/resume', (req, res) => {
    res.send('resume')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})