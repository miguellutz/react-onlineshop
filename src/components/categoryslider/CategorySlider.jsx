import './categoryslider.scss'

import { BsLaptop, BsTabletLandscape, BsDisplay, BsSpeaker } from 'react-icons/bs'
import { CiHeadphones } from 'react-icons/ci'
import { FiSmartphone } from 'react-icons/fi'

export default function Categoryslider() {
  return (
    <div className='categories-container'>
      <div className='category'><FiSmartphone />Phones</div>
      <div className='category'><BsLaptop />Laptops</div>
      <div className='category'><BsTabletLandscape />Tablets</div>
      <div className='category'><BsDisplay />Displays</div>
      <div className='category'><CiHeadphones />Headphones</div>
      <div className='category'><BsSpeaker />Speakers</div>
    </div>
  );
}
