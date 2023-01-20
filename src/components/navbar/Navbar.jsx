import { Link, useMatch, useResolvedPath } from 'react-router-dom' // most important changes --> all a tags become <Link /> and hrefs become "to"

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
  const resolvedPath = useResolvedPath(to)
  // You can have absolute and relative paths /... or ... (go to ... page relative page already on)
  // resolvedPath allows you to take relative or absolute path and combines it with path currently on to give full path you are accessing
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  // useMatch takes in string or object. With object you want to pass path and end: true to match the full url and not partial

  return (
    <Link to={to} className={isActive ? "active" : ""} {...props}>{children}</Link>
  )
}
