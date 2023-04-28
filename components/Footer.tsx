import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 to-blue-400 flex justify-between">    
      <div className="mt-6">
        <img className="w-6" src="/cp.png"></img>Copyright 2023
      </div>
      <div className="flex">
        <Link href="https://github.com/mHaaapala"><img src="/github.png" className="w-20"></img></Link>
        <Link href="https://www.instagram.com/kalnab3"><img src="/iglogo.png" className="w-20"></img></Link>
        <Link href="https://twitter.com/kalnab3"><img src="/twitter.png" className="w-20"></img></Link>
      </div>
      <div className="">
        <h5>Contact</h5>
        <p>matias.haapala1@gmail.com</p>
        <p>0458553999</p>
      </div>
    </div>
  )
}

export default Footer