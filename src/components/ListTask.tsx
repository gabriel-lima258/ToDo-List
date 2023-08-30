import { ChangeEvent } from 'react'

import styles from './ListTask.module.css'

import { Trash } from 'phosphor-react'

interface ListTaskProps {
    isChecked: boolean;
    id: string;
    content: string;
    onDeleteTask: (task: string) => void;
    onTaskChange: (id: string, event:boolean) => void;
}

export function ListTask({isChecked, id, content, onDeleteTask, onTaskChange}: ListTaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleDeleteCondicional() {
       if (isChecked === true) {
        return handleDeleteTask();
       } else {
        return alert("Você não pode excluir uma tarefa não completa!");
       }
    }

    function handleChangeCheck(e: ChangeEvent<HTMLInputElement>) {
        onTaskChange(id, e.target.checked)
    }

    return(
        <div className={styles.content}>
            <div className={styles.checklist}>
                <input 
                type="checkbox" 
                id={id} 
                title='marcar task'
                checked={isChecked}
                onChange={handleChangeCheck}
                />
                <label htmlFor={id}></label>
            </div>

            <p className={isChecked ? styles.active : styles.disabled}>{content}</p>
         
            <button title='deletar task' onClick={handleDeleteCondicional}>
                <Trash size={20}/>
            </button>

        </div>
    )
}