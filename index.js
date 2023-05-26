const express = require("express")
const api = express()
api.use(express.json());
api.use(express.urlencoded({
  extended: true
  }));

const User = require("./user")
const user = new User()

//Listar por id
api.get('/:id', (req, res) => {
  const id = req.params.id;
  retorno = user.listUser(id);
  console.log(retorno)
  const objeto = JSON.parse(retorno);
  res.status(200).send(objeto);
});


//Listar todos
api.get('/', (req, res) => {
  retorno = user.listUser();
  console.log(retorno)
  const objeto = JSON.parse(retorno);
  res.status(200).send(objeto);

});

//Inserir
api.post('/', (req, res) => {
  const nome = (req.body.nome) ? req.body.nome : "";
  const email = (req.body.email) ? req.body.email : "";
  const cpf = (req.body.cpf) ? req.body.cpf : "";
  const telefone = (req.body.telefone) ? req.body.telefone : "";

  const retorno = user.addUser(nome, telefone, cpf, email);
  if(retorno == "success"){
    res.status(200).send({'status':'Success'});
  }
});

//Editar
api.put('/:id', (req, res) => {

  const nome = (req.body.nome) ? req.body.nome : "";
  const email = (req.body.email) ? req.body.email : "";
  const cpf = (req.body.cpf) ? req.body.cpf : "";
  const telefone = (req.body.telefone) ? req.body.telefone : "";
  const id = req.params.id;

  const retorno = user.altereUser(id, nome, telefone, cpf, email)
  if(retorno == "success"){
    res.status(200).send({'status':'Success'});
  }else{
    res.status(400).send({'error':retorno});
  }
});

//Deletar
api.delete('/:id', (req, res) => {
  const id = req.params.id;
  retorno = user.removeUser(id);
  if(retorno == "success"){
    res.status(200).send({'status':'Success'});
  }
  res.status(400).send({"error":retorno})
});

api.listen(3000, ()=>{
  console.log("API esta rodando")
});
