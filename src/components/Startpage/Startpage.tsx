import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IOctokitResponse } from "../../models/IOctokitResponse";
import { Header } from "../Header/Header";
import { Presentation } from "../Presentation/Presentation";
import { Projects } from "../Projects/Projects";
import "./startpage.scss"

export const RepoContext = createContext<IOctokitResponse[]>([])

export function Startpage() {

   const  [loading, setLoading] = useState(false);
   const [repos, setRepos] = useState<IOctokitResponse[]>([])



function updateRepos() {

  async function getRepos() {
    let response = await axios.get("https://api.github.com/users/NicklasSoderlund/repos")
    setRepos(response.data)
    localStorage.setItem("repos", JSON.stringify(response.data))
  }
  getRepos()
}
useEffect(() => {
updateRepos()
}, [])


    return (

       
       
        <main className="pageContainer">
      <RepoContext.Provider value={repos}>
        <Header></Header>
        <div className="innerContent">
          <div className="presentationContainer">
        {loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
           : <Outlet></Outlet> }
           </div>
        <Projects></Projects>
        </div>
        </RepoContext.Provider>     
        <span id="copyright">© nicklassoderlund.se 2023</span>
   </main>
   
    )
}