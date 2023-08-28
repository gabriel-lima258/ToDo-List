import styles from './ListTask.module.css'

import { Trash } from 'phosphor-react'

export function ListTask() {
    return(
        <div className={styles.content}>
            <div className={styles.checklist}>
                <input type="checkbox"  id='checkbox' title='marcar task'/>
                <label htmlFor="checkbox"></label>
            </div>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button title='deletar task'>
                <Trash size={20}/>
            </button>
        </div>
    )
}