export default function validateInfo(values, database) {
    let errors = {}

    if (!values.email) {
        errors.email = "Email is required"
    }

    if (!values.password) {
        errors.password = "Password is required"
    }

    for (let i = 0; i < database.length; i++) {
        if (values.email === database[i].email) {
            if (values.password !== database[i].password) {
                errors.password = "Invalid login id or password"
            }
        }
    }

    return errors;
}