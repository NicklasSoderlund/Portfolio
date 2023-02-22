import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Presentation } from "../Presentation/Presentation";
import { Projects } from "../Projects/Projects";

export function Startpage() {

    return (
       
       
        <main className="pageContainer">
        <Header></Header>
        <Outlet></Outlet>
        <Projects></Projects>


   </main>
   
    )
}