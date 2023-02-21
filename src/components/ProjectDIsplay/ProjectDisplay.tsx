import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { IOctokitResponse } from "../../models/IOctokitResponse";
import { projectService, repoService } from "../../services/projectService";

export function ProjectDisplay() {
  const [repo, setRepo] = useState<IOctokitResponse>() 
 
  const repoFetch = async () => {
    
      let response = await repoService("Finished-Design");
      console.log(response)
      setRepo(response)

  }
  useEffect(() => {repoFetch();}, []);
  console.log(repo)

  return (
    <div></div>
  )
}