import styles from './Select.module.css'

function Select ({type, name}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{name}</label>
            <select name={name}>{name}
                <option>Selecione uma categoria</option>
                <option>Ficção cientifica</option>
                <option>Fantasia heroica</option>
                <option>Suspense</option>
                <option>Terror</option>
            </select>
            
        </div>
    )

}

export default Select