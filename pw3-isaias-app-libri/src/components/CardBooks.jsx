/* Importando o css para estilizar o cardbooks */
import style from "./CardBooks.module.css"
import Button from "./Button";

const CardBooks = ({titulo, autor, foto}) =>{
    return(
        <div  className = {style.bookCard}>
            <h3 className = {style.titulo}>{titulo} </h3>
            <p className = {style.autor}>{autor} </p>
            <img src = {foto} alt = " As Cavernas de Aço" title = " As Cavernas de Aço " />
            <div>
            <Button Label = "DETALHE" />
            </div>
        </div>
    )
};      
export default CardBooks;