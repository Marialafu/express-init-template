ayuda a tener un esquema visual para ver que hacer en cada caso.

## Crear estudiante

- Method: POST
- Url: /api/users
- Headers: XXXX
- Body: name, surname, phone, age, available

Response:

- Status: 200
- Body: El objeto con el estudiante creado

## Actualizar estudiante

- Method: PATCH
- Url: /api/users/id
- Headers: XXXX
- Body:

Response:

- Status: 200
- Body: La información del usuario actualizada.

PUT: Actualización completa de todos los datos.
PATCH: Actualización de un solo dato.
