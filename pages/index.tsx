import Footer from "../components/Footer";
import TopBar from "../components/TopBar";


export default function Home() {
  return (
    <div>
    <TopBar />
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid mt-12">
          <div className="shadow-lg pb-full rounded-3xl bg-gray-100 bg-opacity-50">
              <h1 className="text-3xl text-zinc-400 text-center">
                I am Matias, i am a Web Developer
              </h1>
          </div>
        </div>   
      </div>
      <Footer />
    </div>
  )
}