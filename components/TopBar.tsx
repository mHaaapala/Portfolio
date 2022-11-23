import styles from './TopBar.module.css'

function TopBar() {
  return (
    <div className="sticky">
      <h1 className=" text-white bg-gradient-to-r from-red-500 to-blue-500">
        <p>About me</p>
        <p>Info</p>
      </h1>
    </div>
  )
}

export default TopBar;