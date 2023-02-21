import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { IOctokitResponse } from "../../models/IOctokitResponse";
import { projectService, repoService } from "../../services/projectService";

export function ProjectDisplay() {
  const [repo, setRepo] = useState<IOctokitResponse>() 
 
  const repoFetch = async () => {
    
      let response = await repoService("Finished-Design");
      setRepo(response)

  }
  useEffect(() => {repoFetch();}, []);


  return (
    <div className="presentation">
       
       <div> <span className="presentationTitle">{repo?.name}</span></div>
       <div className="presentationText"><p>{repo?.description}</p>
           
           <div>    
            <p>Main Language: {repo?.language}</p>
            <p><a href={repo?.html_url}>Github Repo</a></p>
           </div>
           
        </div>

    </div>
  )
}