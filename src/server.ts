import express, { response } from 'express';

const app = express();

app.get('/home',(request,response)=>{
    return response.json({message:'hello world '});
}); 

app.listen(3333);