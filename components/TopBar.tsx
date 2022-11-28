import styles from './TopBar.module.css'

function TopBar() {
  return (
    <div className="">
      <h1 className=" text-white font-bold bg-gradient-to-r from-red-600 to-blue-600 flex">
        <p className="mx-5 my-5">Matias Haapala</p>
          <p className="mx-auto mr-0 my-5">About me</p>
          <p className="ml-5 mr-5 my-5">Info</p>
          <p className="mr-5 my-5">Socials</p>
      </h1>
    </div>
  )
}

export default TopBar;