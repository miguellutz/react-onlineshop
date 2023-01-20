import './navbar.scss'

import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {

  return (
    <div className="nav-container">
      <nav className="nav">
        <CustomLink href="/"><AiFillHome /></CustomLink>
        <CustomLink href="/cart"><FaShoppingCart /></CustomLink>
        <CustomLink href="/account"><BsFillPersonFill /></CustomLink>
      </nav>
    </div>
  )
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname

  return (
    <a href={href} className={path === href ? "active" : ""} {...props}>{children}</a>
  )
}
