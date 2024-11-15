import styles from './Select.module.css';

export default function Select({name, text, options, handlerChangeCategory}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handlerChangeCategory}>
                <option>Selecione um categoria</option>
                {
                    options.map(option => {
                        // console.log(option.nome_categoria)
                        return <option key={option.cod_categoria} value={option.cod_categoria}>{option.nome_categoria}</option>
                    })
                }
            </select>
        </div>
    )
}