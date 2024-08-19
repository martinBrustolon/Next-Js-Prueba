"use client"

import Button from "@/componentes/boton"
import Checkbox from "@/componentes/checkbox"
import Contador from "@/componentes/contador"


function pagina(){
    return (
        <div>
        <Button text={"hola"}></Button>
        <Checkbox text={"Cambiar emocion"}></Checkbox>
        <Contador text={0}></Contador>
        </div>
    )
}

export default pagina