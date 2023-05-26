const {ler, salvar} = require('./util.js')

function addUser(nome, telefone, cpf, email){
  datas = ler('./db.txt').split('\r\n');
  if(datas[0] == ''){
    lastId = 0;
  }else{
    if (datas[datas.length-1] == ''){
      lastId = parseInt(datas[datas.length-2].split(";")[0]);
    }else{
      lastId = parseInt(datas[datas.length-1].split(";")[0]);
    }
  }
  row = `${lastId+1};${nome};${telefone};${cpf};${email};`;
  saida = ""
  datas.forEach(element => {
    if(element != ''){
      saida += element + "\r\n";
    }
  });
  saida += row
  salvar('./db.txt', saida)
}

function removeUser(id){
  saida = ''
  datas = ler('./db.txt').split('\r\n');
  datas.forEach(element => {
    elementId = element.split(";")[0]
    if (id != elementId && element != ''){
      saida += element + "\r\n";
    }
  });
  salvar('./db.txt', saida)
}

addUser("Jhon", "759874541", "032457821854", "ianksamacs@gmail.com");
//removeUser('4')

module.exports = { addUser }

