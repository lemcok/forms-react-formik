import Form from "./components/Form/Form"
import FormSecond from "./components/Form/FormSecond"

export const App = () => {
   return (
      <div className="contenedor">
         <div className="content">
            <FormSecond />
            <Form/>
         </div>
      </div>
   )
}