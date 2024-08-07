import Tittle from "./Tittle.js";
import TittleClass from "./TittleClass.js";
export default function Header({ text }){
      return(
          <nav>
            <Tittle></Tittle>
            <TittleClass>{text}</TittleClass>
          </nav>
      )
  }