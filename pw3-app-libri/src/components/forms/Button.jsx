import styles from './Button.module.css';

export default function Button({rotulo}) {
    return (
        <div className={styles.button}>
            <button>{rotulo}</button>
        </div>
    )
}