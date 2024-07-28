import React from 'react'
import {FaSearch} from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Crystal</span>
                <span className='text-slate-700'>Project</span>
            </h1>

            <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center h-8  sm:h-12'>
                <input type="text" placeholder='Search' className='bg-transparent outline-none w-36 sm:w-64 '/>

                <button>
                    <FaSearch className ="text-slate-600"/>
                </button>
            </form>
            <ul className='flex gap-4'>
                <li className='hidden sm:inline'><a href="/">Home</a></li>
                <li className='hidden sm:inline'><a href="/aboutUs">About</a> Us</li>
                <li className='hidden sm:inline'><a href="/signIn">Sign In</a></li>
            </ul>
        </div>
    </header>
  )
}
