import Image from 'next/image';
import Link from 'next/link';

function TopBar() {
  return (
      <div className=" bg-gradient-to-r from-red-400 to-blue-400 flex">
        <Link href="/"><Image className="w-20" width={400} height={400} alt={"logo"} src="/home.png"></Image></Link>
        <Link className="text-black my-6 mx-14" href="/contact">  <p>Socials</p> </Link>
        <Link className="text-black my-6" href="/projects"> <p>Projects</p> </Link>
      </div>

  )
}

export default TopBar;