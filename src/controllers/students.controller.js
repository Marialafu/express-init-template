const Student = require("../models/studentsmodel")

const getAll = async (req, res) => {
    try {
        const students = await Student.find()
        //importamos el modelo. Todas las funciones son promesas, así que es asíncrono.
        
        //Aunque el modelo sea para uno, es el punto de unión entre la base de datos y express.
        res.json(students)
    } catch (error) {
        
    }
}


const createStudent = async (req, res) => {
    //req.body - name, surname...los datos que enviemos desde front.

    //desestructuramos el body que viene de front
    const {name, surname, phone, email} = req.body

    //validamos que ninguno falte, por que de por sí no da error.
    //estas comprobaciones se hacen en el middleware de esta función.
    if (!name || !surname || !phone || !email){
        return res.status(400).json({message: 'Falta un dato'})
    }

    //en vez de tener que utilizar .save() que puede dar fallo. La función create permite crear el esquema.
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
}

const editStudent = (req, res) => {
    //req.body - name, surname, phone...
    //req.params - studentId
    const {studentId} = req.params

    //si queremos hacer una comprobación, que sirve para algo general, es mejor no poner en cada una de las funciones. Se utilizan middelwares.

    const updatedStudent = Student.findByIdAndUpdate(studentId, req.body, {new: true})
    //de normal devuelve el original, tarda una vuelta en darnos el actualizado. Por eso ponemos el {new: true}, para que nos dé el actualizado.

    res.json(updatedStudent)
}

module.exports = {getAll, createStudent, editStudent}