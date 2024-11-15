import { Link } from 'react-router-dom';

import style from './Button.module.css';

const Button = ({label, router, cod_livro}) => {
    return (
        <div>
            <Link to={`${router}${cod_livro}`}>
                <button className={style.button}>{label}</button>
            </Link>
        </div>
    )
}

export default Button