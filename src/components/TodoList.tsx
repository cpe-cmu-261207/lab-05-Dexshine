import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
    id: number;
    name: string;
    isDone: boolean;//if (true) hide button and marked text.
}
const TodoList = () => {
    const [curTask, setCurTask] = useState<string>('') //curTask come from input
    const [tasks, setTask] = useState<TaskData[]>([]) //list for normal task
    const [doneTasks, setDoneTask] = useState<TaskData[]>([]) //list for done task

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value) //value from input box
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
            //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
            const newId = (new Date()).getTime()
            // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
            // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
            const newTasks = [{id: newId, name: taskName, isDone:false},...tasks]
            setTask(newTasks)
        }

    }
    const deleteTask = (id: number) => {
        // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
        const newTasks = tasks.filter(x => x.id !== id)
        setTask(newTasks)
    }
    const doneTask = (id: number) => {
        const newId = (new Date()).getTime()
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].id === id){
                const newName = tasks[i].name
                const doneTasks2= [{id: newId, name: newName, isDone:true},...doneTasks]//สร้าง Task ใหม่ ที่มีขีดฆ่าบนข้อความ ใส่ไปด้านบนของ doneTasks
                setDoneTask(doneTasks2)
                const newTasks2 = tasks.filter(x => x.id !== id)//ลบ Task ที่กด done
                setTask(newTasks2)
            } 
        }
    }
    return (
        <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
            <input id='this' className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
        </div>

        {/* tasks section */}
        <div>
            {tasks.map( x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask} isDone={x.isDone}/>)}
            {doneTasks.map( x => <Task id={x.id} name={x.name} doneFn={() => null} deleteFn={() => null} isDone={x.isDone}/>)}
        </div>
    </div>
    )
}
export default TodoList