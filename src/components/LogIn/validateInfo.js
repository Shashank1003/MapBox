export default function validateInfo(values, database) {
    let errors = {}
    console.log(database)

    if (!values.password) {
        errors.password = "Password is required"
    }

    for (let i = 0; i < database.length; i++) {
        if (values.email === database[i].email) {
            if (values.password === database[i].password) {
                errors = {}
                break
            }
        } else {
            console.log(errors)
            errors.email = "invalid login id or password"
        }
    }

    if (!values.email) {
        errors.email = "Email is required"
    }

    return errors;
}