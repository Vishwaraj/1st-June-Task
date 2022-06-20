import { useFormik } from "formik";
import * as yup from 'yup';


const formValidationSchema = yup.object({
  email: yup.string().min(5, 'need a bigger username').required().email(),
  password: yup.string().min(8, 'need a bigger password').max(12, 'reduce the length of password').required()
});



export function BasicForm() {
  const {handleSubmit, handleBlur, handleChange, values, errors, touched} = useFormik({
    initialValues: { email: "anusha", password: "123" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log('onSubmit', values);
    }
  });

  return (
    <>
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          id="email"
          type="email"
        />
        { touched.email && errors.email ? errors.email : ''}
        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          id="password"
          type="password"
        />
        {touched.password && errors.password ? errors.password : ''}
        <button type="submit">Submit</button>

        <p>{JSON.stringify(values)}</p>
        <p>{JSON.stringify(touched)}</p>

      </form>
 
    </>
  );
}
