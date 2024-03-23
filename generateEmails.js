const fs = require('fs');

const emails = [];

for (let i = 0; i < 30; i++) {
  const email = {
    srNo: i + 1,
    to: 'user' + (i % 3) + '@example.com',
    subject: 'Email subject ' + (i + 1),
    body: 'Email body ' + (i + 1),
    date: new Date().toISOString().slice(0, 10)
  };

  emails.push(email);
}

fs.writeFileSync('emails.json', JSON.stringify(emails, null, 2));

console.log('Emails.json file created with 30 rows.');