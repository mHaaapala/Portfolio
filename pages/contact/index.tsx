import React from 'react'
import TopBar from '../../components/TopBar'
import Link from 'next/link'

const info = () => {
  return (
    <div>
      <TopBar />

      <div className=" mx-auto p-4">
    <div className="grid mt-12">
      <div className=" pb-full rounded-3xl bg-gray-100 bg-opacity-50">
          <p className="flex justify-center w-full text-2xl text-zinc-400 text-center">
              <a href="https://twitter.com/kalnab3" target="_blank"><img className="w-32" src="/twitter.png"></img>Twitter</a>
              <a href="https://www.instagram.com/kalnab3" target="_blank"><img className="w-32 mx-44" src="/iglogo.png"></img>Instagram</a>
              <a href="https://github.com/mHaaapala" target="_blank"><img className="w-32" src="/github.png"></img>Github</a>
          </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default info