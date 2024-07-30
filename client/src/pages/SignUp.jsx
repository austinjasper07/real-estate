import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>

      <form className='flex flex-col gap-4 '>

        <input type="text" className='border p-3 rounded-lg' name='username' placeholder='Username' />

        <input type="email" className='border p-3 rounded-lg' name='email' placeholder='Email' />

        <input type="password" className='border p-3 rounded-lg' name='password' placeholder='Password' />

        <input type="password" className='border p-3 rounded-lg' name='confirm-password' placeholder='Confirm Password' />

        <button className='rounded-lg bg-rose-800 uppercase text-white p-3 hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
