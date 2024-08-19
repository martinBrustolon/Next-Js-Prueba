"use client"

import Header from "@/componentes/header"
import CheckBox from "@/componentes/checkbox"
import { useEffect, useState } from "react"

function pagina(){
    let[cuenta, setCuenta] = useState(0)
    let[checked,setChecked] = useState(false)
    let [check, setCheck] = useState("Botón feliz :)")
    let [emocion, setEmocion] = useState("feliz")
    useEffect(() =>{
        if (emocion == "feliz") {
            setCheck("Botón triste :(")
        }
        else {
            setCheck("Botón feliz :)")
        }
    }
        ,[emocion]
    )

    function cambiarEmocion(event) {
        console.log(emocion);
        let checked1 = event.target.checked;
        console.log(checked1)

        if(checked1) {
            setChecked(false)
            setEmocion("feliz")
        }
        else {
            setChecked(true)
            setEmocion("triste")
        }
        console.log(checked)
    }

    function cambiarContador(){
        if (checked == false) {
            setCuenta(cuenta+1)
        }
        else {
            setCuenta(cuenta-1)
        }
    }
    return (
        <div>
        <Header text="Medidor de felicidad" functionButton={cambiarContador} textButton={"Esquizofrenia"}></Header>
        <CheckBox onChange={cambiarEmocion} text={check}></CheckBox>
        <h3>Contador:{cuenta}</h3>
        </div>

        
    )
}

export default pagina