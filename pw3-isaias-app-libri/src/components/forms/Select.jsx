import styles from './Select.module.css'

function Select({ type, name, options, handlerChangeCategory }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{name}</label>
            <select name={name} onChange={handlerChangeCategory}>{name}

                <option>Selecione uma categoria</option>

                {
                    options.map((option) => {
                        // console.log(option.cod_categoria + ' - ' + option.nome_categoria)   
                        return <option value={option.cod_categoria}>{option.nome_categoria}</option>                                      
                    })
                }
    
            </select>

        </div>
    )

}

export default Select