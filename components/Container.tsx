import styles from './Container.module.css'

function Container() {
  return (  
  <div className="max-w-screen-lg mx-auto p-4">
    <div className="grid mt-12">
      <div className="shadow-lg pb-full rounded-3xl bg-gray-100 bg-opacity-50">
          <p className="font-bold text-slate-600 text-center">Programmer</p>
      </div>
    </div>
  </div>
  )
}

export default Container;