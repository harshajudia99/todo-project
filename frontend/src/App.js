import './App.css';
import './Todo.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { TodoList } from './Components/TodoList';
import { AddTodo } from './Components/AddTodo';
import { UpdateTodo } from './Components/UpdateTodo';
import { Footer } from './Footer';
// import { Root } from './Components/Root'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
          <Routes>
            {/* <Route path='/' element={<Root />}> */}
              <Route path="/" element={<TodoList />} />
              <Route path="/addtodo" element={<AddTodo />} />
              <Route path="/updatetodo/:id" element={<UpdateTodo />} />
            {/* </Route> */}
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
