const express = require('express')
const { sequelize } = require('./models/integration'); 

const app = express()

const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to LVIC' }))

app.listen(port, () => console.log(`App listening on port ${port}!`))