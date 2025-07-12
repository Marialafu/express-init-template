const { isValidObjectId } = require("mongoose")
const Student = require("../models/studentsmodel")

//Hacemos un middleware previo a editStudent
//Una función de middleware por cada cosa, solo se comprueba el estudiante, no los profesores.
const checkStudents = async (req, res, next) => {
    const {id} = req.params

    //Saber si el estudiante ID es correcto dentro de mongoDb
    if (!isValidObjectId(id)){
        return res.status(400).json({message: 'El formato del id es incorrecto'})

        //De por si, aunque esto sea false no para. Tenemos que pararlo. Hay que poner el return delante del error.
    }
    //Comprobar si existe en la base de datos
    const studentFound = await Student.findById(id)

    if (!studentFound){
        return res.status(400).json({message: 'El estudiante no existe en mongoDB'})
    }

    next()
}

module.exports = {checkStudents}