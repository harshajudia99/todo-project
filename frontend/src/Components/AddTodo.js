import React, {useState} from 'react'

export const AddTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = async () => {
        let result = await fetch('http://localhost:3000/createtodo',{
            method:"POST",  
            body: JSON.stringify({title, description}),
            headers:{
                "Content-Type":"application/json",
            }
        });
        result = await result.json();
        console.log(result)
        setTitle('');
        setDescription('');
    }

  return (
    <div className='add-update-todo-container'>
        <h2>Add Todo</h2>
        <input type="text" placeholder='Enter todo title' className='inputbox add-todos' onChange={(e) => { setTitle(e.target.value) }} value={title} />
        {/* <input type="text" placeholder='Enter todo description' className='inputbox' onChange={(e) => { setDescription(e.target.value) }} value={description} /> */}
        <textarea placeholder='Enter todo description' className='inputbox add-todos' onChange={(e) => { setDescription(e.target.value) }} value={description} rows="4" cols="50"/>
        <button onClick={addTodo} className='appbutton'>Add Todo</button>
        </div>
  )
}
