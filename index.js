const express = require("express")
const api = express()



//Listar por id
api.get('/:id', (req, res) => {
  res.status(200).send({'status':'Success'});
});

//Listar por cpf
api.get('/cpf/:cpf', (req, res) => {
  res.status(200).send({'status':'Success'});
});

//Listar todos
api.get('/', (req, res) => {
  res.status(200).send({'status':'Success'});
});

//Inserir
api.post('/', (req, res) => {
  res.status(200).send({'status':'Success'});
});

//Editar
api.put('/:id', (req, res) => {
  res.status(200).send({'status':'Success'});
});

//Deletar
api.delete('/:id', (req, res) => {
  res.status(200).send({'status':'Success'});
});

api.listen(3000, ()=>{
  console.log("API esta rodando")
});
