const express = require('express');
// not important
const app = express();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/', async (req,res)=> {
  res.status(200).json("hello from chen");
})

app.listen(8080, ()=> {
  console.log('server start at 8080...');
})