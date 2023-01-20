import './closebutton.scss'

import { Link } from 'react-router-dom'

import { AiOutlineCloseCircle } from 'react-icons/ai'

function CloseButton() {
  return (
    <div className="closeButton-container">
      <Link to="/" className="closeButton"><AiOutlineCloseCircle /></Link>
    </div>
  )
}

export default CloseButton
