const {ler, salvar} = require('./util.js')

class User {

  constructor ( ) {
    console.log("Nova")
  }

  addUser(nome, telefone, cpf, email){
    let datas = ler('./db.txt').split('\r\n');
    let lastId = 0;
    if(datas[0] == ''){
      lastId = 0;
    }else{
      if (datas[datas.length-1] == ''){
        lastId = parseInt(datas[datas.length-2].split(";")[0]);
      }else{
        lastId = parseInt(datas[datas.length-1].split(";")[0]);
      }
    }
    let row = `${lastId+1};${nome};${telefone};${cpf};${email};`;
    let saida = ""
    datas.forEach(element => {
      if(element != ''){
        saida += element + "\r\n";
      }
    });
    saida += row
    salvar('./db.txt', saida)
    return 'success'
  }
  
  removeUser(id){
    let saida = ''
    let deletou = false;
    let datas = ler('./db.txt').split('\r\n');
    datas.forEach(element => {
      let elementId = element.split(";")[0]
      if (id != elementId){
        if (element != ''){
          saida += element + "\r\n";
        }
      }else{
        deletou = true;
      }
    });
    if(deletou){
      salvar('./db.txt', saida);
      return 'success';
    }
    return 'id não encontrado';  
  }
  
  altereUser(id, nome = "", telefone = "", cpf = "", email = ""){
    let saida = '';
    let alterou = false;
    let datas = ler('./db.txt').split('\r\n');
    datas.forEach(element => {
      let elementV = element.split(";");
      let elementId = elementV[0];
      if (id != elementId){
        if (element != ''){
          saida += element + "\r\n";
        }
      }else{
        nome = (nome == '') ? elementV[1] : nome;
        telefone = (telefone == '') ? elementV[2] : telefone;
        cpf = (cpf == '') ? elementV[3] : cpf;
        email = (email == '') ? elementV[4] : email;
        saida += `${elementId};${nome};${telefone};${cpf};${email};\r\n`;
        alterou = true;
      }
    });
    if(alterou){
      salvar('./db.txt', saida)
      return 'success';
    }
    return 'id não encontrado';
  }
  
  listUser(id = ''){
    let datas = ler('./db.txt').split('\r\n');
    let saida = ''
    if (id!= ''){
      
      datas.forEach(element => {
        let elementV = element.split(';')
        if(id == elementV[0]){
          saida = `{"id":"${elementV[0]}", "nome":"${elementV[1]}", "telefone":"${elementV[2]}", "cpf":"${elementV[3]}", "email":"${elementV[4]}"}`;
          return;
        }
      });
    }else{
      saida = '{"registros":['
      datas.forEach(element => {
        let elementV = element.split(';')
        if (element != ""){
          saida += `{"id":"${elementV[0]}", "nome":"${elementV[1]}", "telefone":"${elementV[2]}", "cpf":"${elementV[3]}", "email":"${elementV[4]}"},`;
        }
      });
      saida += "]}"
      saida = saida.replace("},]", "}]")
    }
    if(saida ==""){
      return "id não encontrado"
    }
    return saida
  }
}


//console.log(altereUser(id='10', nome="Elieverton"))
//addUser("Pedro", '75987023', '656454', 'jhjh@hjh.com')
//console.log(listUser())
module.exports = User 

