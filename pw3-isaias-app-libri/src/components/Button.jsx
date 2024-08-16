import style from "./Button.module.css"

const Button = ({Label}) => {
    return(
        <div>
            <button className={style.ButtonContainer}>{Label}</button>
        </div>
    )
}
export default Button;