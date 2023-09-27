import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export const UpdateTodo = () => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getTodo();
    }, [])

    const getTodo = async () => {
        console.log(params.id);
        let result = await fetch(`http://localhost:3000/get/${params.id}`);
        result = await result.json()
        setTitle(result.title);
        setDescription(result.description);
    }

    const updateTodo = async () =>{
        let result = await fetch(`http://localhost:3000/updatetodo/${params.id}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({title, description}),
        })
        result= await result.json()
        navigate('/')
    }

  return (
    <div className='add-update-todo-container'>
        <h2>Update Todo</h2>
        <input type="text" placeholder='Enter todo title' className='inputbox add-todos' onChange={(e) => { setTitle(e.target.value) }} value={title} />
        <textarea placeholder='Enter todo description' className='inputbox add-todos' onChange={(e) => { setDescription(e.target.value) }} value={description} rows="4" cols="50"/>
        <button onClick={updateTodo} className='appbutton'>Update Todo</button>
        </div>
  )
}
