import Link from 'next/link';

function TopBar() {
  return (
      <div className=" bg-gradient-to-r from-red-400 to-blue-400 flex">
        <a href="/"><img className="w-20" src="/home.png"></img></a>
        <Link className="text-black my-6 mx-14" href="/contact">  <p>Socials</p> </Link>
        <Link className="text-black my-6" href="/projects"> <p>Projects</p> </Link>
      </div>

  )
}

export default TopBar;