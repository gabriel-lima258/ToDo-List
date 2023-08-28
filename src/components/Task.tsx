import { EmptyBox } from './EmptyBox'
import { ListTask } from './ListTask'

import styles from './Task.module.css'

export function Task() {
    return(
        <div className={styles.taskBox}>
            <header>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluidas <span>2 de 5</span></p>
            </header>

            <div className={styles.content}>
                <ListTask/> 
                <ListTask/> 
                <ListTask/> 
            </div>
        </div>
    )
}