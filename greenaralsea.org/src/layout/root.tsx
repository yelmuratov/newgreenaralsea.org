import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"


const Root = () => {
  return (
    <>
    <Header />
    <main className='w-full'>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root