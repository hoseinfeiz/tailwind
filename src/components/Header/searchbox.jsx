import React from 'react'

const Searchbox = () => {
  return (
    <div className=" mt-5 px-0  text-slate-300 relative">
      <input type="text" className=" w-full p-3 rounded-sd bg-[#233A50] outline-none border-gray-950 border-2" placeholder="جستجو فیلم و سریال" />
      <i className="absolute left-8 top-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </i>
    </div>
  )
}

export default Searchbox
