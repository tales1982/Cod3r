import express from 'express';

const app = express();
//===================TRABALHA AQUI DENTRO=======================
app.get('/', (req, res) => {

 let addPessoa:[string,number,string]
    addPessoa = ["Tales",40,"Luxembourg"]
  
  res.send(addPessoa);
  

});
//===========================FIM================================
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});



