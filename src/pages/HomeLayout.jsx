import {Outlet} from "react-router-dom"
import {Header, NavBar} from "../components"

export const HomeLayout = () => {
    
    return(
        <>
        <Header />
        <NavBar />
        <section className="align-element py-20">
            <Outlet />
        </section>
        </>
    )
}