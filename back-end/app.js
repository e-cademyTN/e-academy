const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users')
const materialRouter = require('./routes/material')
const teacherRouter = require('./controllers/teacher')
var morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter)
app.use('/api/material', materialRouter)
app.use('/api/teacher', teacherRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})