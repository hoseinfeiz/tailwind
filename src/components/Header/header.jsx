import React from 'react'
import Navbar from './navbar'
import Searchbox from './searchbox'
import Followus from './followus'
import HeaderSlider from './headerSlider'
const Header = () => {
  return (
    <header className="container p-6 font-[samim]">
      <div className="container">
        <Navbar />
        <Searchbox />
        <Followus />
        <HeaderSlider />
      </div>
    </header>
  )
}
export default Header
