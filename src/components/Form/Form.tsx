import { Formik } from 'formik'
import { useState } from 'react'

interface FormValues {
	nombre: string
	correo: string
}
const Form = () => {
	const [isSubmit, setIsSubmit] = useState(false)

	const initialValues: FormValues = {
		nombre: '',
		correo: ''
	}
	return (
		<>
			<Formik 
				initialValues={ initialValues }
				validate={(values) => {
					let errors = {} as FormValues
					if(!values.nombre){
						errors.nombre =  'Por favor ingrese un nombre'
					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
						errors.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!values.correo){
						errors.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
						errors.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
					
					return errors
				}}
				onSubmit={(values, { resetForm })=> {
					console.log( 'formulario enviado!!', values )
					resetForm()
					setIsSubmit(!isSubmit)
					setTimeout(() => {
						setIsSubmit(false)
					}, 4000);
				}}
			>
				{({ handleSubmit, values:{ nombre, correo }, handleChange, handleBlur, touched, errors }) => (
					<form onSubmit={ handleSubmit } className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input
								type="text"
								name="nombre"
								placeholder="Nombre"
								id="nombre"
								value={ nombre }
								onChange={ handleChange }
								onBlur={ handleBlur } // ejecuta una funcion cunado sales del input: sirve para validar el campo
								autoComplete='off'
							/>
							{ touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div> }
						</div>

						<div>
							<label htmlFor="correo">Correo</label>
							<input
								type="text"
								name="correo"
								placeholder="Correo"
								id="correo"
								value={ correo }							
								onChange={ handleChange }
								onBlur={ handleBlur }
								autoComplete='off'
							/>
							{ touched.correo && errors.correo && <div className='error'>{errors.correo}</div> }
						</div>

						<button type="submit">Enviar</button>
						{ isSubmit &&  <p className='exito'>Formulario enviado con exito!</p>}
					</form>
				)}
			</Formik>
		</>
	);
}
 
export default Form;