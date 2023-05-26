const fs = require('fs');


function ler(arquivo){
  try {
    const conteudo = fs.readFileSync(arquivo, 'utf8');
    return conteudo;
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return null;
  }
}

function salvar(arquivo, conteudo){
  if (typeof conteudo !== 'string') {
    //console.error('O conteúdo fornecido não é uma string válida');
    return;
  }
  fs.writeFile(arquivo, conteudo, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo:', err);
      return;
    }
    console.log('Arquivo gravado com sucesso!');
  });
}


module.exports = {ler, salvar};