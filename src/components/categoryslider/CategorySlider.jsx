import './categoryslider.scss'

import { BsLaptop, BsTabletLandscape, BsDisplay, BsSpeaker } from 'react-icons/bs'
import { CiHeadphones } from 'react-icons/ci'
import { FiSmartphone } from 'react-icons/fi'

export default function Categoryslider({categories, handleClick}) {

  return (
    <div className='categories-container'>
      <div className='category' onClick={handleClick}><FiSmartphone />Phones</div>
      <div className='category' onClick={handleClick}><BsLaptop />Laptops</div>
      <div className='category' onClick={handleClick}><BsTabletLandscape />Tablets</div>
      <div className='category' onClick={handleClick}><BsDisplay />Displays</div>
      <div className='category' onClick={handleClick}><CiHeadphones />Headphones</div>
      <div className='category' onClick={handleClick}><BsSpeaker />Speakers</div>
    </div>
  );
}
