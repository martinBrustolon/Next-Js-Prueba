import Tittle from "./Tittle.js";
import Button from "./button.js";

export default function Header({ text,functionButton,textButton,color}){
      return(
          <nav>
            <Tittle text={text}></Tittle>
            <Button text={textButton} onClick={functionButton} color={color}></Button>
          </nav>
      )
  }