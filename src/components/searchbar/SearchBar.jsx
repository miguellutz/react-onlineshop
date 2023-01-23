import React from 'react'
import { AiFillAmazonCircle, AiOutlineSearch } from 'react-icons/ai'
import { IoLogoPython } from 'react-icons/io'

import './searchbar.scss'
import '../../index.scss'


function SearchBar() {
  return (
    <section className="searchbar-container">
      <form action="/" method="get" className="searchbar">
        <IoLogoPython fontSize="40px" color="#4db5ff" />
        <input type="search" placeholder='Search' />
        <button type="submit"><AiOutlineSearch color="white" /></button>
      </form>
    </section>
  )
}

export default SearchBar
