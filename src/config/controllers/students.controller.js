const create = async (req, res) => {
    //req.body - name, surname...los datos que enviemos

    //desestructuramos el body que viene de front
    const {name, surname, phone, email} = req.body

    //validamos que ninguno falte, por que de por sí no da error.
    if (!name || !surname || !phone || !email){
        return res.status(400).json({message: 'Falta un dato'})
    }

    //en vez de tener que utilizar .save()
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
}