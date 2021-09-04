import { useState, useEffect } from "react";

// Data from login form is stored in values which is later validated by "validate.js".
// If data is entered correctly, a for loop check the login id and password with database.
// If user is not registered or enters incorrect password, it shows error.

const useForm = (callback, validate, database) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, database));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;
