"use client"

import Header from "@/componentes/header"

function pagina(){
    let[cuenta, setCuenta] = useState(0)
    function cambiarContador(){
        if (document.getElementById("check").value == false) {
            setCuenta(cuenta+1)
        }
        else {
            setCuenta(cuenta-1)
        }
    }
    return (
        <div>
        <Header text="hola" functionButton={cambiarContador} textButton={"hola"}></Header>
        <CheckBox text={"decrementar"} id="check"></CheckBox>
        <h3>Contador:{cuenta}</h3>
        </div>

        
    )
}

export default pagina