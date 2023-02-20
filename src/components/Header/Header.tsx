import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


export function Header() {

    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
    const mailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const gitHubIcon = <FontAwesomeIcon icon={faGithub}/>

    return ( 
    <>
    <div></div>
    <div>
        <ul>
            <li><a href="">{mailIcon}</a></li>
            <li><a href="">{linkedInIcon}</a></li>
            <li><a href="">{gitHubIcon}</a></li>
        </ul>
    </div>
    </>
               
            
     ) 
}