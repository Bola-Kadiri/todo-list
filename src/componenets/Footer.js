import React, {useContext, useState} from 'react';
import { DataContext } from './DataProvider';
const Footer=()=>{
    const [checkAll, setCheckAll]=useState(false)
    const [todos, setTodos]=useContext(DataContext)

    const handleCheckAll=()=>{
        const newTodos=[...todos]
        newTodos.forEach(todo=>{
            todo.complete=!checkAll
        })
        setTodos(newTodos)
    }

    const deleteTodo = ()=>{
        const newTodos = todos.filter(todo=>{
            return todo.complete===false;
        })
        setTodos(newTodos)
        setCheckAll(false)
    }
    return(
        <>
        {
            todos.length ===0 ? <h2>Sorry! there is nothing to display</h2>
             : <div>
             <div className='row'>
                 <label htmlFor='all'>
                    <input type='checkbox' name='all' id='all'
                    onClick={handleCheckAll} checked={checkAll}/>
                    ALL
                 </label>
                 <p>Congratulations, you have {todos.length} to do</p>
                 <button id='delete' onClick={deleteTodo}>Delete</button>
              </div>
            </div>
        }
        </>
     
    )
}

export default Footer;