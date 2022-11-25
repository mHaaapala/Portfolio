import styles from './TopBar.module.css'

function TopBar() {
  return (
    <div className="">
      <h1 className=" text-white bg-gradient-to-r from-red-500 to-blue-500 flex">
        <p className="bg"></p>
        <p className="mr-60">MH</p>
        <p className="mr-10">About me</p>
        <p className="">Info</p>
      </h1>
    </div>
  )
}

export default TopBar;