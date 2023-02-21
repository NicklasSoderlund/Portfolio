import axios from "axios";
import { Octokit } from "octokit";
import { useState } from "react";
import { IOctokitResponse } from "../models/IOctokitResponse";


const octokit = new Octokit({
    auth: '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'
  });

export async function projectService(project:string) {
    
 

    let response =   await octokit.request('GET /repos/{owner}/{repo}', {
      owner: 'NicklasSoderlund',
      repo: project
   })
     ;
    return response 
  

}

export async function repoService(repo:string) {

  let response = await axios.get("https://api.github.com/repos/NicklasSoderlund/" + repo
  )
  console.log(response.data);
  return response.data as IOctokitResponse
  

}