import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { CustomInput } from "./CustomInput";

interface FormValues {
  name: string
  age: number
  password: string
  confirmPassword: string
}

const initialForm: FormValues = {
  name: "",
  age: 0,
  password: "",
  confirmPassword: ""
}

const AdvancedForm = () => {

const handlesubmit = () => {
  console.log( 'submit success!' )
}

  return (
     <Formik initialValues={initialForm} onSubmit={handlesubmit}>
        {({ errors, handleChange, handleBlur, touched }: FormikProps<FormValues>) => (
           <Form autoComplete="off" className="forms2">
              <label htmlFor="username">Username</label>
              <Field
                 id="username"
                 type="text"
                 name="name"
                 placeholder="Enter your username"
              />

              <CustomInput
                 label="Username"
                 name="username"
                 type="text"
                 placeholder="Enter your username"
                 onChange={ handleChange }
                 onBlur={ handleBlur }
              />
              <ErrorMessage name="name" component={()=> (
                <div style={{ color: 'red' }}>{ errors.name }</div>
              )}/>
           </Form>
        )}
     </Formik>
  );
};
export default AdvancedForm;
