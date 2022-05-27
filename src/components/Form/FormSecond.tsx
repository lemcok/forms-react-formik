import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

interface FormValues {
	name: string
	email: string,
	sexo: string,
	country: string,
	message:  string
}
const FormSecond = () => {
	const [isSubmit, setIsSubmit] = useState(false)

	const initialValues: FormValues = {
		name: '',
		email: '',
		country: 'Peru',
		sexo: 'Hombre',
		message: ''
	}
	return (
		<>
			<Formik 
				initialValues={ initialValues }
				validate={(values) => {
					let errors = {} as FormValues
					if(!values.name){
						errors.name =  'Por favor ingrese un nombre'
 					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
						errors.name = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion email
					if(!values.email){
						errors.email = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
					
					return errors
				}}
				onSubmit={(values, { resetForm })=> {
					console.log( 'formulario enviado!!', values )
					resetForm()
					setIsSubmit(!isSubmit)
					setTimeout(() => {
						setIsSubmit(false)
					}, 4500);
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						<div>
							<label htmlFor="name">Nombre</label>
							<Field
								type="text"
								name="name"
								placeholder="Nombre"
								autoComplete='off'
							/>
							<ErrorMessage 
								name='name' 
								component={()=> (
								<div className='error'>{errors.name}</div>
							)}/>
						</div>

						<div>
							<label htmlFor="email">Correo</label>
							<Field
								type="text"
								name="email"
								placeholder="Correo"
								autoComplete='off'
							/>
							<ErrorMessage 
								name='email' 
								component={()=> (
								<div className='error'>{errors.email}</div>
							)}/>
						</div>
						<div>
							<Field name='country' as='select'  >
								<option value="Peru">Peru</option>
								<option value="Colombia">Colombia</option>
								<option value="Mexico">Mexico</option>
							</Field>
						</div>

						<div>
							<label>
								<Field type='radio' selected name='sexo' value='Hombre' checked='checked'/> Hombre
							</label>
							<label>
								<Field type='radio' name='sexo' value='Mujer'/> Mujer
							</label>
						</div>

						<div>
							<Field name='message' as='textarea' placeholder='Mensaje'  />
						</div>

						<button type="submit">Enviar</button>
						{ isSubmit &&  <p className='exito'>Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default FormSecond;