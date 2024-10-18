import style from "./CardBooks.module.css"
import Button from "./Button"

const CardBooks = ({titulo, autor, imagem}) => {
    return (
        <div className={style.cardBook}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img className={style.img} src={imagem} alt={titulo} title={titulo}/>
            <div>
                <Button label="DETALHES"/>
            </div>
        </div>
    )
}

export default CardBooks