const express = require('express')
const cors = require('cors')
 const multer = require('multer');
const usersRouter = require('./routes/users')
const materialRouter = require('./routes/material')
const teacherRouter = require('./routes/teacher')
const stud_materialRouter = require ('./routes/stud_material')

var morgan = require('morgan')
const app = express()
const upload = multer();
const port = 3000
app.use(upload.any());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors())

app.use('/api/users', usersRouter)
app.use('/api/material', materialRouter)
app.use('/api/teacher', teacherRouter)
app.use('/api/student', stud_materialRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})