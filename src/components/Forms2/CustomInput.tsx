import { useField } from "formik"
import{ InputHTMLAttributes } from "react"

// Asi el componente puede tener acceso a el "onClick={}" y demas
interface props extends InputHTMLAttributes<HTMLInputElement> {
   label: string,
}
export const CustomInput = ({ label, ...inputProps }:props) => {
   // const [field, meta]=useField(inputProps)

   return (
      <>
         <label>{ label }</label>
         <input {...inputProps} />
      </>
   )
}