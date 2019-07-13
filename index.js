
const express = require("express")
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Byrnndi Bou'))
app.get('/about', (req, res) => res.send('Index about'))
app.get('/contact', (req, res) => res.send('Contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))