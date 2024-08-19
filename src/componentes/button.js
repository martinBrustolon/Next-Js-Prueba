import styles from "@/componentes/Button.module.css"
import clsx from "clsx"

export default function Button(props) {
    return (
        <button onClick={props.onClick}  className={

            clsx(
                {
                    [styles.buttonTriste] : props.color,
                    [styles.buttonFeliz] : !props.color,
                }
            )


        }
        >{props.text}</button>
    )
}