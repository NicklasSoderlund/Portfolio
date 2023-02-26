import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Presentation } from "../Presentation/Presentation";
import { Projects } from "../Projects/Projects";
import "./startpage.scss"

export function Startpage() {

    return (
       
       
        <main className="pageContainer">
        <Header></Header>
        <div className="innerContent">
        <Outlet></Outlet>
        <Projects></Projects>
        </div>

   </main>
   
    )
}