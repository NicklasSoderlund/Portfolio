import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPersonRays } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./header.scss";

export function Header() {

    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
    const mailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const gitHubIcon = <FontAwesomeIcon icon={faGithub}/>
    const cornerIcon = <FontAwesomeIcon icon={faPersonRays}/>

    return ( 
    <header>
    <div id="cornerIcon">
        <span>{cornerIcon}</span>
    </div>
    <div id="navbar">
        <ul>
            <li><a href="">{mailIcon}</a></li>
            <li><a href="">{linkedInIcon}</a></li>
            <li><a href="">{gitHubIcon}</a></li>
        </ul>
    </div>
   </header>            
            
     ) 
}