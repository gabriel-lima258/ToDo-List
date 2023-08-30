import { useState } from 'react'

import styles from './ListTask.module.css'

import { Trash } from 'phosphor-react'

interface ListTaskProps {
    isChecked: boolean;
    keyTask: string;
    content: string;
    onDeleteTask: (task: string) => void;
}

export function ListTask({isChecked, keyTask, content, onDeleteTask}: ListTaskProps) {

    const [taskCkeck, setTaskCkeck] = useState(false)

    function handleDeleteTask() {
        onDeleteTask(keyTask)
    }

    function handleMessageErrorDelete() {
       alert("Você não pode excluir uma tarefa não completa!");
    }


    return(
        <div className={styles.content}>
            <div className={styles.checklist}>
                <input 
                type="checkbox" 
                id='checkbox' 
                title='marcar task'

                />
                <label htmlFor="checkbox"></label>
            </div>

            <p className={isChecked ? styles.active : styles.disabled}>{content}</p>
         
            <button title='deletar task' onClick={isChecked ? handleDeleteTask : handleMessageErrorDelete}>
                <Trash size={20}/>
            </button>
        </div>
    )
}