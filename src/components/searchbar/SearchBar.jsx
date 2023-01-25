import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLogoPython } from 'react-icons/io'

import './searchbar.scss'
import '../../index.scss'


function SearchBar({ onChange }) {

  return (
    <section className="searchbar-container">
      <form action="/" method="get" className="searchbar">
        <IoLogoPython fontSize="40px" color="#4db5ff" />
        <input type="search" placeholder='Search' id="searchbar-input" onChange={onChange} />
        <button type="submit"><AiOutlineSearch color="white" /></button>
      </form>
    </section>
  )
}

export default SearchBar
