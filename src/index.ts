import express from 'express';


const app = express();

app.get('/', (request, response)=>{
    return response.json({ message: 'e ae, galera!'});
})

app.listen(3333);