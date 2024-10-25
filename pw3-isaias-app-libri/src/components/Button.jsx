import { Link } from 'react-router-dom';
import styles from '../components/Button.module.css';

function Button ({label, router, cod_livro}){
    return(
        <div className={styles.buttoncontainer}>
            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>
        </div>
    )
}
export default Button