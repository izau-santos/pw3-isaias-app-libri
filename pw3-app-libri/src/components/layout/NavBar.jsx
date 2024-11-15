import { Outlet, Link } from 'react-router-dom'
import style from './NavBar.module.css'
const NavBar = () => {
    return (
        <>
            <nav className={style.navbar}>
                <ul className={style.list}>  
                        <li className={style.item}>
                            <img src='./book.png' className={style.logo}/>
                        </li>
                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>
                    <Link to='/CreateBooks'>
                        <li className={style.item}>CADASTRAR LIVRO</li>
                    </Link>
                    <Link to='/ListBooks'>
                        <li className={style.item}>LISTAR LIVRO</li>
                    </Link>
                </ul>
            </nav>
            <Outlet/>
        </>
    )

}

export default NavBar;