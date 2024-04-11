import { Outlet } from "react-router-dom"


const Root = () => {
  return (
    <>
    <header>
        header
    </header>
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