import { useState, ChangeEvent } from 'react'

import styles from './ListTask.module.css'

import { Trash } from 'phosphor-react'

interface ListTaskProps {
    isChecked: boolean;
    keyTask: string;
    content: string;
    onDeleteTask: (task: string) => void;
}

export function ListTask({isChecked, keyTask, content, onDeleteTask}: ListTaskProps) {

    const [taskCkeck, setTaskCkeck] = useState(isChecked)

    function handleDeleteTask() {
        onDeleteTask(keyTask)
    }

    function handleDeleteCondicional() {
       if (taskCkeck === true) {
        return handleDeleteTask();
       } else {
        return alert("Você não pode excluir uma tarefa não completa!");
       }
    }

    function handleChangeCheck(e: ChangeEvent<HTMLInputElement>) {
        setTaskCkeck(e.target.checked);
    }

    return(
        <div className={styles.content}>
            <div className={styles.checklist}>
                <input 
                type="checkbox" 
                id={keyTask} 
                title='marcar task'
                checked={taskCkeck}
                onChange={handleChangeCheck}
                />
                <label htmlFor={keyTask}></label>
            </div>

            <p className={taskCkeck ? styles.active : styles.disabled}>{content}</p>
         
            <button title='deletar task' onClick={handleDeleteCondicional}>
                <Trash size={20}/>
            </button>

        </div>
    )
}