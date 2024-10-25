<<<<<<< HEAD
import style from "./CardBooks.module.css";
import Button from "./Button";

const CardBooks = ({ titulo, autor, imagem, cod_livro }) => {
=======
import style from "./CardBooks.module.css"
import Button from "./Button"

const CardBooks = ({titulo, autor, imagem}) => {
>>>>>>> c92315e2ddcbd8d86e5085445dd6afa323399582
    return (
        <div className={style.cardBook}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
<<<<<<< HEAD
            <img className={style.img} src={imagem} alt={titulo} title={titulo} />
            <div>
                <Button label='DETALHES' router='/DetailBook/' cod_livro={cod_livro} />
            </div>
        </div>
    );
};

export default CardBooks;
=======
            <img className={style.img} src={imagem} alt={titulo} title={titulo}/>
            <div>
                <Button label="DETALHES"/>
            </div>
        </div>
    )
}

export default CardBooks
>>>>>>> c92315e2ddcbd8d86e5085445dd6afa323399582
