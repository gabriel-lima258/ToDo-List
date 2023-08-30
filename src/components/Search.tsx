import { PlusCircle } from 'phosphor-react'
import { useState, FormEvent, ChangeEvent} from 'react'

import styles from './Search.module.css'

interface SearchProps {
    onCreateNewTask: (content: string) => void
}

export function Search({onCreateNewTask}: SearchProps) {

    const [newTask, setNewTask] = useState('');

    function handleNewTaskAdd() {
        onCreateNewTask(newTask);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value);
    }

    return(
        <div className={styles.wrapper}>
            <input 
            name='task'
            type="text" 
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            />
            <button onClick={handleNewTaskAdd}>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}