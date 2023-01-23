import './categoryslider.scss'

import { BsLaptop, BsTablet, BsDisplay, BsSpeaker } from 'react-icons/bs'
import { CiHeadphones } from 'react-icons/ci'

export default function Categoryslider() {
  return (
    <div className='categories-container'>
      <div className='category'><BsLaptop />Laptops</div>
      <div className='category'><BsTablet />Tablets</div>
      <div className='category'><BsDisplay />Displays</div>
      <div className='category'><CiHeadphones />Headphones</div>
      <div className='category'><BsSpeaker />Speakers</div>
    </div>
  );
}
