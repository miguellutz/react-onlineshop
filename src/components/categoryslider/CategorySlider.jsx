import './categoryslider.scss'

import { BsLaptop, BsTabletLandscape, BsDisplay, BsSpeaker } from 'react-icons/bs'
import { CiHeadphones } from 'react-icons/ci'
import { FiSmartphone } from 'react-icons/fi'

export default function Categoryslider({categories, handleClick, category}) {

  return (
    <div className='categories-container'>
      <div className={`category ${category === "Phones" ? "active" : ""}`} onClick={handleClick}><FiSmartphone />Phones</div>
      <div className={`category ${category === "Laptops" ? "active" : ""}`} onClick={handleClick}><BsLaptop />Laptops</div>
      <div className={`category ${category === "Tablets" ? "active" : ""}`} onClick={handleClick}><BsTabletLandscape />Tablets</div>
      <div className={`category ${category === "Displays" ? "active" : ""}`} onClick={handleClick}><BsDisplay />Displays</div>
      <div className={`category ${category === "Headphones" ? "active" : ""}`} onClick={handleClick}><CiHeadphones />Headphones</div>
      <div className={`category ${category === "Speakers" ? "active" : ""}`} onClick={handleClick}><BsSpeaker />Speakers</div>
    </div>
  );
}
