import './navbar.scss'

import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {

  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="/" className="active"><AiFillHome /></a>
        <a href="/cart"><FaShoppingCart /></a>
        <a href="/account"><BsFillPersonFill /></a>
      </nav>
    </div>
  )
}
