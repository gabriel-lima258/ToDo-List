import styles from './EmptyBox.module.css'

import formEmpty from '../assets/Clipboard.svg'

export function EmptyBox() {
    return(
        <div className={styles.contentBox}>
            <div className={styles.info}>
                <img src={formEmpty} alt="formulário vazio" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}