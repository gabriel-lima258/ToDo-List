import { v4 as uuidv4 } from 'uuid'
import { useState, FormEvent, ChangeEvent } from 'react'

import { EmptyBox } from './EmptyBox'
import { ListTask } from './ListTask'
import { Search } from './Search'

import styles from './Task.module.css'

const tasksList = [
    {
      id: uuidv4(),
      content: "Terminar o projeto React",
      isSelected: true
    },
    {
      id: uuidv4(),
      content: "Contar os dias pro aniversário da leticia",
      isSelected: false
    },
  ]

export function Task() {
    const [tasks, setTasks] = useState(tasksList);

    function handleCreateNewTask(content:string) {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                content: content,
                isSelected: false
            }
        ])
    }

    function handleDeleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete 
        })

        setTasks(taskWithoutDeletedOne)
    }

    return(
        <div className={styles.taskBox}>
              
            <Search
            onCreateNewTask={handleCreateNewTask}
            />
                 
            <header>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluidas <span>2 de 5</span></p>
            </header>

            <div className={styles.content}>
             
                {
                    tasks.map(item => {
                        return(
                            <ListTask
                            key={item.id}
                            content={item.content}
                            keyTask={item.id}
                            isChecked={item.isSelected}
                            onDeleteTask={handleDeleteTask}
                            /> 
                        )
                    })
                }
             
            </div>
        </div>
    )
}