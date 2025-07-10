const router = require('express').Router()

// desestructuramos los controladores creados
const {getAll} = require ('../../controllers/students.controller')

//ya están incluidos los path, /api/student
router.use('/', getAll)
router.patch('/:id', editStudent)