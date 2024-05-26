import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

const Layout = () => {
  return (
    <>
      <main className="flex w-screen h-screen font-hanken">
        <Sidebar />
        <div className="p-8 w-[calc(100%-120px)] overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
