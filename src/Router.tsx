import { createBrowserRouter } from "react-router-dom";
import { Startpage } from "./components/Startpage/Startpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Startpage></Startpage>
    }
])