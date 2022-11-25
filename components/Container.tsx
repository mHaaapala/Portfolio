import styles from './Container.module.css'

function Container() {
  return (  
    <div className="max-w-screen-lg mx-auto p-4">
    <div className="grid grid-cols-2 gap-4 mt-12 h-5/6">
      <div className="w-full shadow-lg pb-full rounded-xl bg-gray-200">
      </div>
      <div className="w-full shadow-lg pb-full rounded-xl bg-gray-200"></div>
    </div>
  </div>
  
  )
}

export default Container;