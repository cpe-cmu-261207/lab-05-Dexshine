import React, {useState} from 'react'
type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function;
    isDone: boolean;
}


const Task = ({id, name, doneFn, deleteFn, isDone} : TaskProps) => {
    //check if name has mark on it
    const doneTask = <del>{name}</del> //name with line marked
    let task = <span></span> //text template
    let doneAppear = ''
    let delAppear = ''
    //check if tasks is done
    if(isDone === true){//tasks is done
        task = <span className="text-2xl">{doneTask}</span> //display text with line marked
        //hide done/del button
        doneAppear = 'bg-white invisible'
        delAppear = 'bg-white invisible'
    }
    else{//tasks isn't done
        task = <span className="text-2xl">{name}</span> //display normal text
        //done/del visible
        doneAppear = 'bg-green-400 w-24 text-2xl'
        delAppear = 'bg-red-400 w-24 text-2xl'
    }
    //remember button visibility state
    const [show,setShow] = useState(false)
    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseEnter={() => setShow(true)}//show button when mouseEnter
            onMouseLeave={() => setShow(false)}//hide button when mouseLeave
        >
            {task}
            <div className="flex space-x-1 items-center">
            {show?<button className={doneAppear} onClick={() => doneFn(id)}>Done</button>:null}
            {show?<button className={delAppear} onClick={() => deleteFn(id)}>Delete</button>:null}
            </div>
        </div>
    )
}
export default Task