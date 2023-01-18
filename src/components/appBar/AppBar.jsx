import React from 'react'
import { AiFillAmazonCircle, AiOutlineSearch } from 'react-icons/ai'

import './appbar.scss'
import '../../index.scss'


function AppBar() {
  return (
    <section className="appbar-container">
      <form action="/" method="get" className="appbar">
        <AiFillAmazonCircle fontSize="50px" color="#4db5ff" />
        <input type="text" placeholder='Search' />
        <button type="submit"><AiOutlineSearch /></button>
      </form>
    </section>
  )
}

export default AppBar
