import React, {useState} from 'react'
type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function;
    isDone: number;
}

const Task = ({id, name, doneFn, deleteFn, isDone} : TaskProps) => {
    //check if name has mark on it
    const doneTask = <del>{name}</del>
    let task = <span className="text-2xl">{doneTask}</span>
    if(isDone == 1) task = <span className="text-2xl">{doneTask}</span>
    else task = <span className="text-2xl">{name}</span>
    //remember button visibility state
    const [show,setShow] = useState(false)
    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseEnter={() => setShow(true)}//show button
            onMouseLeave={() => setShow(false)}//hide button
        >
            {task}
            <div className="flex space-x-1 items-center">
            {show?<button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>:null}
            {show?<button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>:null}
            </div>
        </div>
    )
}
export default Task