import { FormikHelpers, FormikValues, useFormik } from 'formik';
import './Forms2.css'
import { basicSchema } from './schemas';

interface FormValues {
  email: string
  age: number
  password: string
  confirmPassword: string
}

const onSubmit = async (values: FormikValues, actions: FormikHelpers<FormValues>) => {
  console.log( actions )
  await new Promise( resolve => setTimeout(resolve, 1000))
  actions.resetForm()
  console.log( 'submit success!!' )
}

export const BasicForm = () => {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      age: 0,
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    // onSubmit: values => {
    //   console.log( values )
    // }
    onSubmit
  })
  
  return (
     <form 
      autoComplete="off" 
      className="forms2" 
      onSubmit={handleSubmit}
    >
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={ handleBlur }
            className={ errors.email && touched.email ? 'input-error' : '' }
          />
          { touched.email && errors.email && <p className='error'>{errors.email}</p> }
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            onBlur={ handleBlur }
            className={ errors.age && touched.age ? 'input-error' : '' }
          />
          { touched.age && errors.age && <p className='error'>{errors.age}</p> }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={ handleBlur }
            className={ errors.password && touched.password ? 'input-error' : '' }
          />
          { touched.password && errors.password && <p className='error'>{errors.password}</p> }
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={ handleBlur }
            className={ errors.confirmPassword && touched.confirmPassword ? 'input-error' : '' }
          />
          { touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p> }
        </div>
        <button type='submit' disabled={ isSubmitting }>Submit</button>
     </form>
  );
};
