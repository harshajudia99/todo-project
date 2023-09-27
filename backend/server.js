const express = require("express");
require("./db/config");
const cors = require("cors");
const Todo = require("./db/Todo");

const app = express()
app.use(express.json());
app.use(cors()); 

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gettodo', async (req, res) => {
    const data = await Todo.find();
    res.json(data);
});

app.post('/createtodo', async (req, res)=>{
  let todo = new Todo(req.body);
  let result = await todo.save();
  res.send(result);
})

// app.put('/update/:id', async (req, res) => {
//   let id = req.params.id;
//   const data = await Todo.findById(id);
//   if(!req.body.title==''){
//     data.title= req.body.title;
//   }
//   if(!req.body.description==''){
//     data.title= req.body.description;
//   }
//   await data.save();
//   res.send(data);
// })

app.put('/updatetodo/:id', async (req, resp) => {
  let result = await Todo.updateOne(
      { _id: req.params.id },
      {
          $set: req.body
      }
  )
  resp.send(result)
});

app.delete('/deletetodo/:id', async(req,res)=>{
  // let id = req.params.id;
  let result = await Todo.deleteOne({_id: req.params.id});
  res.send(result);
})

app.get('/get/:id', async(req,res)=>{
  let result = await Todo.findOne({_id: req.params.id})
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})