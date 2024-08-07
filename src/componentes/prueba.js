export default function Button(){
  function funcion(){
    console.log("hola mundo");
  }
    return(
        <Button onClick={funcion}>Registrarse</Button>
    )
}