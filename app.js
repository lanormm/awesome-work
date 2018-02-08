const express = require('express');

express()
.get('/', (req,res) =>{
  res.send('Olá');
})

.get('/ola/:nome', (req,res) =>{
  res.send('Olá ' + req.params.nome);
})
.get('/primeiro', (req,res) => {
  res.send('primeiro')
})
.get('/segundo', (req,res) => {
  res.send('segundo')
})


.listen(8000,() =>{
   console.log('conectado!');
})
