import {useState} from 'react'
import React from 'react'
import Task from './Task'
import { isDoStatement } from 'typescript'
type TaskData = {
    id: number;
    name: string;
    isDone: number;
}
const TodoList = () => {
    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTask] = useState<TaskData[]>([])

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        const x = ev.key
        if(x === 'Enter') addTask(curTask)
    }
    const addTask = (taskName: string) => {
        if(taskName === ''){
            alert("Task cannot be empty")
        }else{
            //
            const newId = (new Date()).getTime()
            //
            //
            const newTasks = [{id: newId, name: taskName, isDone:0},...tasks]
            setTask(newTasks)
        }

    }
    const deleteTask = (id: number) => {
        //
        const newTasks = tasks.filter(x => x.id !== id)
        setTask(newTasks)
    }
    const doneTask = (id: number) => {
        const newId = (new Date()).getTime()
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].id === id){
                const newName = tasks[i].name
                const newTasks = [...tasks,{id: newId, name: newName, isDone:1}]
                const newTasks2 = newTasks.filter(x => x.id !== id)
                setTask(newTasks2)
                console.log(newTasks)
            } 
        }
    }
    return (
        <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
        </div>

        {/* tasks section */}
        <div>
            {tasks.map( x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask} isDone={x.isDone}/>)}
        </div>
    </div>
    )
}
export default TodoList