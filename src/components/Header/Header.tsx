import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./header.scss";
import pixelArtLogo from "./pixel.png";
import { Link } from "react-router-dom";

export function Header() {

    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
    const mailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const gitHubIcon = <FontAwesomeIcon icon={faGithub}/>

    return ( 
    <header>
    <div id="cornerIcon">
     <Link to="/"><img src={pixelArtLogo} alt="" /></Link>
    </div>
    <div id="navbar">
        <ul>
            <li><a href="mailto: nicklassoderlund96@gmail.com">{mailIcon}</a></li>
            <li><a href="https://www.linkedin.com/in/nicklas-söderlund">{linkedInIcon}</a></li>
            <li><a href="https://www.github.com/NicklasSoderlund">{gitHubIcon}</a></li>
        </ul>
    </div>
   </header>            
            
     ) 
}