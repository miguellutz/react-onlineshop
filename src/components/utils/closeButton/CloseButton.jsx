import './closebutton.scss'

import { Link } from 'react-router-dom'

import { AiOutlineCloseCircle } from 'react-icons/ai'

function CloseButton() {
  return (
    <Link to="/" className="closeButton"><AiOutlineCloseCircle /></Link>
  )
}

export default CloseButton
