import { createBrowserRouter } from "react-router-dom";
import { Presentation } from "./components/Presentation/Presentation";
import { ProjectDisplay } from "./components/ProjectDIsplay/ProjectDisplay";
import { Startpage } from "./components/Startpage/Startpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Startpage></Startpage>,
        children: [
            {
                path: "/",
                element: <Presentation></Presentation>,
                index: true
            },
            {
                path: "/project/:id",
                element: <ProjectDisplay ></ProjectDisplay>
            }
        ]
    }
])