export default function CheckBox({ onChange, text }) {
    return (
        <div>
            <input type="checkbox" id="check" onChange={onChange}/>
            <label>{text}</label>            
        </div>
    )
}
