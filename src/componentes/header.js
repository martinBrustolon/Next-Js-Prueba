import Tittle from "./Tittle.js";
import TittleClass from "./TittleClass.js";
import Button from "./button.js";
import CheckBox from "./checkbox.js";
export default function Header({ text,functionButton,textButton}){
      return(
          <nav>
            <Tittle></Tittle>
            <TittleClass text={text}></TittleClass>
            <Button text={textButton} onClick={functionButton}></Button>
          </nav>
      )
  }