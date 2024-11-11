import React from 'react'

const Navbar = () => {
  return (
    <nav className="text-white flex justify-between items-center  text-slate-300 ">
      <div className="flex items-center">
        <h1 className="text-2xl">فیلم کده</h1>
        <ul className="flex gap-6 mr-10 items-center">
          <li>
            فیلم<a href="#"></a>
          </li>
          <li>
            سریال<a href="#"></a>
          </li>
          <li>
            بازیگران<a href="#"></a>
          </li>
          <li>
            بیشتر<a href="#"></a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            ورود<a href="#"></a>
          </li>
          <li className="bg-rose-700 rounded-2xl px-4 py-2 text-white">
            ثیت نام<a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
