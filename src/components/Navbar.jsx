import React from 'react'

const Navbar=()=> {
  return (
    <nav className='flex justify-between bg-slate-700  text-yellow-100 py-1'>
        <div className="logo">
            {/* <span className='font-bold text-xl mx-9'>iTask</span> */}
            <img className='cursor-pointer hover:scale-95 w-14 h-10 rounded-xl mx-7 opacity-7' src=".\img\sufyan-high-resolution-logo (2).png"/>
        </div>
        <ul className="flex gap-8 mx-9  ">
            <li className=' cursor-pointer hover:font-bold transition-all duration-500'>Home </li>

            <li  className='cursor-pointer hover:font-bold transition-all duration-500'>Your Task </li>
        </ul>
    </nav>
  )
}

export default Navbar