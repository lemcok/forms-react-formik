import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Form from '../components/Form/Form'
import FormSecond from '../components/Form/FormSecond'
import AdvancedForm from '../components/Forms2/AdvancedForm'
import { BasicForm } from '../components/Forms2/BasicForm'
import { Navbar } from '../components/Navbar/Navbar'

export const MainRoute = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/forms1' element={ <Form /> } />
            <Route path='/forms2' element={ <FormSecond /> } />
            <Route path='/forms3' element={ <BasicForm /> } />
            <Route path='/forms4' element={ <AdvancedForm /> } />
         </Routes>
      </BrowserRouter>
   )
}