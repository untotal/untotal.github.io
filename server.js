const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    //res.send('Hello World!')
})

app.get('/resume', (req, res) => {
  res.send('resume')
})


//an example to print the server request object
app.get('/request', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('hello');
  res.send(JSON.stringify(req));
})

//an example to print the server response object
app.get('/response', (req, res) => {
  console.log (req);
  //res.setHeader('Content-Type', 'application/json');
  res.send('hello');
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

/*
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
*/



//an example to demonstrate querystrings
//and how they are used to establish parameterized communication between client & server
app.get('/testq', (req, res) => {
  console.log (JSON.stringify(req.query));

  //check if the variable user is there in the querystring
  if (req.query.user) {
    res.send('user param exists in the url'); 
  }
  else {
    res.send('user param does NOT exist in the url'); 
  }
})


//self investigate .... form POST
app.post('/testq', (req, res) => {
  console.log (JSON.stringify(req.query));
  
  //check if the variable user is there in the querystring
  if (req.query.user) {
    res.send('user param exists in the url'); 
  }
  else {
    res.send('user param does NOT exist in the url'); 
  }
})





//this is an example of an entire data set delivered to the user
//e.g. the entire emails.json
app.get('/api/getEmails', (req, res) => {

  const emailsPath = path.join(__dirname, 'emails.json');

  fs.readFile(emailsPath, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const emails = JSON.parse(data);
  
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(emails));
  });
});


//this is an example of an entire data set delivered to the user
//e.g. the entire emails.json
app.get('/api/email/fetch/:uname', (req, res) => {

  var userName = req.params.uname;

  const emailsPath = path.join(__dirname, 'emails.json');

  fs.readFile(emailsPath, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const emails = JSON.parse(data);

    var filtered = emails.filter(e => e.to == userName);
  
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filtered));
  });
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})