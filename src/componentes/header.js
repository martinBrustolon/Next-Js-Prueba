import Tittle from "./Tittle.js";
import Button from "./button.js";

export default function Header({ text,functionButton,textButton}){
      return(
          <nav>
            <Tittle text={text}></Tittle>
            <Button text={textButton} onClick={functionButton}></Button>
          </nav>
      )
  }