import { Outlet } from "react-router-dom"
import Header from "../components/header"


const Root = () => {
  return (
    <>
    <Header />
    <main className='w-full'>
        <Outlet />
    </main>
    <footer>
        footer
    </footer>
    </>
  )
}

export default Root