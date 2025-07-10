const {model, Schema} = require('mongoose')

//tanto el schema como el model irán en singular, representan solo 1.

//generamos el esquema que va a seguir cada grupo de datos, en este caso el perfil del student. Representación del student en mi código.
const studentSchema = new Schema({
    name: {String, required: true},
    //este required se hace en la base de datos, complicado de gestionar. La validación mejor antes, para evitar confictos.

    surname: {String, unique: true},
    //con unique validamos que sea único. De por si mongo no lo hace solo.
    phone: String,
    age: Number,
    available: true,
}, {timestamps: true, versionKey: false})
//timestamps: cuando se ha creado o actualizado el usuario, aparece al usarse el schema para crearse.


//el nombre del model será el nombre de la colección donde se guardará. Si no está creada lo hará, y si lo está se guardará directamente.

//El modelo se crea con el nombre de la colección + el schema creado.
const Student = model('student', studentSchema);

//exportamos el modelo creado.
module.exports = Student
