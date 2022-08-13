import React, {useState, useContext} from 'react';
import { DataContext} from './DataProvider';
const FormInput=()=>{
    const [todos, setTodos]= useContext(DataContext)
    const [todoName, setTodoName] = useState('')
    const addTodo=e=>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}]);
        setTodoName('')
    }
    return(
     <div>
     <form autoComplete='off' onSubmit={addTodo}>
     <input type='text' name='todos' id='todos'
     required placeholder='What needs to be done?'
     value={todoName}
     onChange={e=>setTodoName(e.target.value.toLocaleLowerCase())}
     />
     <button type='submit'>create</button>
   </form>
     </div>
    )
}

export default FormInput;