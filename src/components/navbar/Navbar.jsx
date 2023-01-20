import { Link } from 'react-router-dom' // most important changes --> all a tags become <Link /> and hrefs become "to"

import './navbar.scss'

import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {

  return (
    <div className="nav-container">
      <nav className="nav">
        <CustomLink to="/"><AiFillHome /></CustomLink>
        <CustomLink to="/cart"><FaShoppingCart /></CustomLink>
        <CustomLink to="/account"><BsFillPersonFill /></CustomLink>
      </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname --> page does not refresh so this won't work

  return (
    <Link to={to} className={path === to ? "active" : ""} {...props}>{children}</Link>
  )
}
