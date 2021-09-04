import {
  useState,
  useEffect
} from "react";

// Data from signup form is stored in {values} which is later validated with "validate.js".
// If no errors found i.e. errors === {}, allow submitting of form and store the data into local database

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;