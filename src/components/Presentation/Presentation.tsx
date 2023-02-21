import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./presentation.scss"
export function Presentation() {

    const heartIcon = <FontAwesomeIcon icon={faHeart}/>;

    return(<div className="presentation">
      <div>  <span className="presentationTitle"> Welcome. <i>{heartIcon}</i></span>   </div>

      <div className="presentationText">
        <p>My name is Nicklas Söderlund, a web developer student based in Stockholm, Sweden.
            I'm currently studying at Medieinstituet where i am taking the 2 year course on Web Development
            within E-commerce.
        </p>

        <p>
            I aspire to become the best developer that i can possibly be and to make this dream
            of mine come true.
        </p>
      </div>
       
    </div>)
}