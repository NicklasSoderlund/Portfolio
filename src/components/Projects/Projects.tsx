import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { IOctokitResponse } from "../../models/IOctokitResponse"
import { RepoContext } from "../Startpage/Startpage";
import "./projects.scss"



export function Projects() {

    const repos = useContext(RepoContext);

    let html = repos.map((r, i) => {
       return <span key={i}> <Link to={"project/" + (i)} >{r.name}</Link> </span>
    })
  useEffect(() => {

  }, [])
  

    return ( <div id="projects">
            <div>
                <span id="projectsTitle">Projects</span>
            </div>

            <div id="projectsList">
              {html}   
            </div>
    </div> )
}