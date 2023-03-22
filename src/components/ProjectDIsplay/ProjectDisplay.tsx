import "./projectDisplay.scss"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IOctokitResponse } from "../../models/IOctokitResponse";
import {  getRepos, repoService } from "../../services/projectService";
import { RepoContext } from "../Startpage/Startpage";

export function ProjectDisplay() {
  const [repo, setRepo] = useState<IOctokitResponse>();
  const [currentId, setCurrentId] = useState<string>("");
  const reposContext = useContext(RepoContext);
  const [buildHtml, setBuildHtml] = useState(false);

  const { id } = useParams();

  const [repos, setRepos] = useState<IOctokitResponse[]>(reposContext)

useEffect(() => {
  let reposFromLs = localStorage.getItem("repos") as string;
  setRepos(JSON.parse(reposFromLs));
  setBuildHtml(true)
}, [])

  
  




  return (

    <section>
    {buildHtml ? 
    <div className="presentation" id="animation">
       <div> <span className="projectTitle">{repos[Number(id)].name}</span></div>
       <div className="presentationText"><p>{repos[Number(id)].description}</p>
           
           <div>    
            <p>Main Language: {repos[Number(id)].language}</p>
            <p><a href={repos[Number(id)].html_url}>Github Repo</a></p>
           </div>
           
        </div>
     
     
    </div>
    : <div> </div> }
    </section>
  )
}
