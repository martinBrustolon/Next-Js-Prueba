export default function Button({ text,funcion }){
      return(
          <Button onClick={funcion}>{ text }</Button>
      )
  }