import axios from "axios";
import { useState } from "react";
import { IOctokitResponse } from "../models/IOctokitResponse";



export async function repoService(repo:string) {

  let response = await axios.get("https://api.github.com/repos/NicklasSoderlund/" + repo
  )
  return response.data as IOctokitResponse
  

}

export async function getRepos() {
  let response = await axios.get("https://api.github.com/users/NicklasSoderlund/repos")
  console.log(response.data);
}