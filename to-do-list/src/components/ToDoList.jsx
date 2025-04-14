import React,{ useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Eat Breakfast","Take a Shower","Walk the dog"])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event){
      setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t,newTask])
            setNewTask('')
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=> i !== index )
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        
        if(index >0 ){
           const updatedTasks = [...tasks];
           [updatedTasks[index], updatedTasks[index-1]] =  
           [updatedTasks[index-1],updatedTasks[index]];
           setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
      if(index < tasks.length - 1 ){
        const updateTasks = [...tasks];
        [updateTasks[index],updateTasks[index+ 1]]  = 
        [updateTasks[index+1],updateTasks[index]];
        setTasks(updateTasks)

      }
    }

  return (
    <>
     <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div >
          <input type='text' placeholder='Enter a Task...' value={newTask} onChange={handleInputChange}/>
          <button className="add-btn" type='button' onClick={addTask}>
            Add 
          </button>
        </div>
          <ol>
            {tasks.map((task,index) =>  
            <li key={index}> 
            <span className="text">{task}</span>
            <button className='delete-btn' onClick={() => deleteTask(index)}>X</button>
            <button className='move-btn' onClick={() => moveTaskUp(index)}>🔼</button>  
            <button className='move-btn' onClick={() => moveTaskDown(index)}>🔽</button>  
            </li>  )}
          </ol>


      </div>
    </>
  )
}

export default ToDoList
