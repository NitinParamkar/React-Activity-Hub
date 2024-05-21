import {useState} from "react";
import {v4 as uuidv4 } from 'uuid'; //to give unique ids

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
     
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));  //this creates a copy of that array by excepting single element
    }
    let upperCaseAll = () => {
         setTodos( (prevTodos)=>(
            prevTodos.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase()
            };
         })));
    };
    let MarkAllDone = () => {
        setTodos( (prevTodos)=>(
           prevTodos.map((todo)=>{
           return{
               ...todo,
               isDone: true,
           };
        })));
   };
    let UpperCaseOne = (id) => {
        setTodos( (prevTodos)=>(
           prevTodos.map((todo)=>{
            if(todo.id==id){
              return{
                 ...todo,
                task: todo.task.toUpperCase()
            };
        }else{
          return todo;
        }
        })));
   };
   let TaskDone = (id) => {
    setTodos( (prevTodos)=>(
       prevTodos.map((todo)=>{
        if(todo.id==id){
          return{
             ...todo,
             isDone: true,
        };
    }else{
      return todo;
    }
    })));
};

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks to do</h4>
            <ul>
                {
                    todos.map((todo)=>(
                           <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button> 
                            <button onClick={()=>UpperCaseOne(todo.id)}>update to uppercase</button>
                            <button onClick={()=>TaskDone(todo.id)}>Mark-Done</button> 
                            </li>
                    ))
                }
            </ul>
        <br></br>
        <button onClick={upperCaseAll}>UpperCase All</button>
        <button onClick={MarkAllDone}>Mark All As Done</button>
        </div>
    );
}

// using deleteTodo(todo.id) will execute the function their itself. so instead 
//we use arrow function their