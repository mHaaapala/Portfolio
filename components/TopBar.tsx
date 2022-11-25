import styles from './TopBar.module.css'

function TopBar() {
  return (
    <div className="">
      <h1 className=" text-white font-bold bg-gradient-to-r from-red-600 to-blue-600 flex">
        <p>MH</p>
          <p className="mx-auto mr-0">About me</p>
          <p className="ml-5">Info</p>
      </h1>
    </div>
  )
}

export default TopBar;