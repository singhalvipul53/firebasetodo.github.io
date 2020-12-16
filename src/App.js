import React, { useEffect, useState } from 'react'
import './App.css'
import { db, auth } from './firebase'
import Todo from './Todo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [Input, setInput] = useState('')




  const addTodo = (e) => {
    e.preventDefault()
    db.collection('todos').add({
      todo: Input,
      // timestamp:firebase.firestore.fieldValue.serverTimestamp()
    })
  }

  // const updateTodo=()=>{

  //     db.collection('todos').doc(todo.id).set(
  //       {
  //         todo:input
  //       },{merge:true}
  //     )
  //     setOpen(false)

  // }
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().todo
      })

      ))
    })
  })


  return (
    <>
      <div className='todo'>
        <div className='todoHeading'>
          <h1>Todo App</h1>
        </div>
        <div className='todoWriting'>
          <input value={Input} placeholder='Type something..' onChange={e => setInput(e.target.value)} />
          <button onClick={addTodo}>Add Todo</button>
          <ul>
            <div className='outside'>
              <li>For Testing</li>
              <div className='inside'>
                <span>
                  Edit
                </span>
                <span><button>Delete</button></span>
              </div>
            </div>
            {todos.map(todo => (
              <Todo todo={todo} />

            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

