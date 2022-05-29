import { Link } from "react-router-dom"

export const Navbar = () => {
   return (
      <div>
         <Link to='forms1'>forms1</Link> | { ' ' }
         <Link to='forms2'>forms2</Link> | { ' ' }
         <Link to='forms3'>forms3</Link> | { ' ' }
         <Link to='forms4'>forms4</Link> | { ' ' }
      </div>
   )
}