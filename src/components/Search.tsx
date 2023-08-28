import { PlusCircle } from 'phosphor-react'

import styles from './Search.module.css'

export function Search() {
    return(
        <div className={styles.wrapper}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}