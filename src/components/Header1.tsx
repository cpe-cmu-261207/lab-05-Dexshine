type HeaderProps = {
    name: string;
    studentId: string;
}

const HeaderNew = ({name, studentId} : HeaderProps) => {
    return (
        <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by {name} {studentId}</span>
      </div>   
    )
}
export default HeaderNew