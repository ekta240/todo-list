import React,{useState} from "react"

function ToDoList(){
    const [tasks,setTasks] = useState([
        {name : "Eat breakfast", completed: false},
        {name : "Walk dog", completed: false},
        {name : "Clean room", completed: false},
    ]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks((currentTasks) => [...currentTasks,{name : newTask, completed: false},]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    return(
        <div className="to-do-list">
            <h1>TO DO LIST</h1>
            <div>
                <input type="text" 
                placeholder="ENTER A TASK..." 
                value={newTask} 
                onChange={handleInputChange} />
                <button
                className="add-button"
                onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <input 
                     type="checkbox" 
                     checked={task.completed} 
                     onChange={() => toggleTaskCompletion(index)}
                     />
                    <span 
                        className="text" style={{
                        textDecoration: task.completed ? "line-through" : "none",}}
                    >
                        {task.name}
                    </span>
                    <button 
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        👆👆
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        👇👇
                    </button>
                </li>
                )}
            </ol>
        </div>
    );
    

}
export default ToDoList 