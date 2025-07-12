const router = require('express').Router()

// desestructuramos los controladores creados
const {getAll} = require ('../../controllers/students.controller')

//ya están incluidos los path, /api/student
router.use('/', getAll)

//incluimos el middleware de checkStudents para hacer un check antes de realizar la acción final. Todos los datos a los que tiene acceso el controller estarán accesibles para el middleware.
router.patch('/:id', checkStudents, editStudent)