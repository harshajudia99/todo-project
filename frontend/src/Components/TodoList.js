// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export const TodoList = () => {

//     const [todos, setTodos] = useState("");

//     useEffect(() => {
//         getTodos();
//     }, [])

//     const deleteTodo = async (id) => {
//         console.log(id)
//         let result = await fetch(`http://localhost:3000/deletetodo/${id}`, {
//             method: 'DELETE'
//         });
//         result = await result.json();
//         if (result) {
//             getTodos();
//         }
//     }

//     const getTodos = async () => {
//         let result = await fetch('http://localhost:3000/gettodo');
//         result = await result.json();
//         setTodos(result);
//     }
//     return (
//         <div>
//             {
//                 todos.length > 0 ? todos.map((item, index) =>
//                     <ul key={item._id}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardMedia
//                                 sx={{ height: 140 }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="green iguana"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {item.description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button size="small" onClick={() => deleteTodo(item._id)}>Delete</Button>
//                                 <Button size="small"><Link className='update-btn-link' to={`/updatetodo/${item._id}`}>Update Todo</Link></Button>
//                             </CardActions>
//                         </Card>)
//                     </ul>
//         : <h2>You have no thing todo!</h2>
//             }
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const TodoList = () => {

  const [todos, setTodos] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:3000/deletetodo/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      getTodos();
    }
  };

  const getTodos = async () => {
    let result = await fetch('http://localhost:3000/gettodo');
    result = await result.json();
    setTodos(result);
  };

  return (
    <div>
      {todos.length > 0 ? todos.map((item, index) => (
        <Card key={item._id} sx={{ maxWidth: 345 }} className='todo-card'>
          <CardContent className='todo-card-content'>
            <Typography gutterBottom variant="h5" component="div" className='todo-card-typography-title'>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='todo-card-typography-desc'>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button type="submit" size="small" onClick={() => deleteTodo(item._id)}>Delete</Button>
            <Button type="submit" size="small">
              <Link className="update-btn-link" to={`/updatetodo/${item._id}`}>Update Todo</Link>
            </Button>
          </CardActions>
        </Card>
      )) : <h2>You have no thing todo!</h2>}
    </div>
  );
};
