import React from 'react'
import { AiFillAmazonCircle, AiOutlineSearch } from 'react-icons/ai'

import './appbar.scss'
import '../../index.scss'


function AppBar() {
  return (
    <section className="appbar-container">
      <form action="/" method="get" className="appbar">
        <AiFillAmazonCircle fontSize="40px" color="#4db5ff" />
        <input type="search" placeholder='Search' />
        <button type="submit"><AiOutlineSearch color="black" /></button>
      </form>
    </section>
  )
}

export default AppBar
