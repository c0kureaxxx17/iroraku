const express = require('express')
const app = express()
const mysql = require('mysql')
const port = process.env.PORT || 3001

const client = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'itemmaster.appsaqua.com',
  port: 3306
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
console.log(`listening on *:${port}`);
})

app.get('/apitest', (req, res) => {
  res.json({ message: "Hello World!" });
  client.query(
    'SELECT * FROM maker_list',
    (error, results) => {
      // console.log(results);
      // res.render('index.ejs', {items: results});
    }
  );
});