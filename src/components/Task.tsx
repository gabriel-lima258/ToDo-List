import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

import { EmptyBox } from './EmptyBox'
import { ListTask } from './ListTask'
import { Search } from './Search'

import styles from './Task.module.css'

const tasksList = [
    {
      id: uuidv4(),
      content: "Terminar o projeto React",
      isSelected: false
    },
    {
      id: uuidv4(),
      content: "Contar os dias pro aniversário da leticia",
      isSelected: true
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
        countSelectedTasks();
    }

    const taskLength = tasks.length;

    function countSelectedTasks() {
        const selectedCount = tasks.reduce((taskDoneCount, taskCurrent) => {
            return taskCurrent.isSelected ?  taskDoneCount + 1 : taskDoneCount;
        }, 0)

        return selectedCount;
    }

    function taskChange(id: string, event: boolean) {
        const taskCompleted = tasks.map((task) => 
            task.id == id 
            ? {
                ...task,
                isSelected: event,
            }
            : task
        );

        setTasks(taskCompleted)
    }

    return(
        <div className={styles.taskBox}>
              
            <Search
            onCreateNewTask={handleCreateNewTask}
            />
                 
            <header>
                <p>Tarefas criadas <span>{taskLength}</span></p>
                <p>Concluidas <span>{countSelectedTasks()} de {taskLength}</span></p>
            </header>

            <div className={styles.content}>
            {
                taskLength === 0 
                ?
                    <EmptyBox/>
                :
                <>
                {
                    tasks.map(item => {
                        return(
                            <ListTask
                            key={item.id}
                            id={item.id}
                            content={item.content}
                            isChecked={item.isSelected}
                            onDeleteTask={handleDeleteTask}
                            onTaskChange={taskChange}
                            /> 
                        )
                    })
                }
                </>
            }
            </div>
        </div>
    )
}