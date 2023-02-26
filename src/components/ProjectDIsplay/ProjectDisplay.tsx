
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IOctokitResponse } from "../../models/IOctokitResponse";
import {  repoService } from "../../services/projectService";

export function ProjectDisplay() {
  const [repo, setRepo] = useState<IOctokitResponse>();
  const [currentId, setCurrentId] = useState<string>("");

  const { id } = useParams();
  
 
    useEffect(() => {   
      if (id === "1")
      setCurrentId("Finished-Design")
      if (id === "2")
      setCurrentId("TodoList")
      if (id === "3")
      setCurrentId("Webshop-GroupProject")
   },[id]);
 
 
 
  const repoFetch = async () => {
    if (currentId !== "") {
      let response = await repoService(currentId);
      setRepo(response)
    }
      

  }
  useEffect(() => {repoFetch();}, [currentId]);



  return (
  
    <div className="presentation" id="animation">
       
       <div> <span className="projectTitle">{repo?.name}</span></div>
       <div className="presentationText"><p>{repo?.description}</p>
           
           <div>    
            <p>Main Language: {repo?.language}</p>
            <p><a href={repo?.html_url}>Github Repo</a></p>
           </div>
           
        </div>

    </div>
  )
}
