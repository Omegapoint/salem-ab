import * as express from 'express';
import * as mysql from 'mysql';const app = express();
const port = 3000;

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const query = 'SELECT * FROM users WHERE username = \'' + username + '\' AND password = \'' + password + '\'';  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  });  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });  connection.end();
});app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
