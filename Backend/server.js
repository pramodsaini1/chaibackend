 import express from 'express'

 const app = express()

 app.get('/',(req,res)=>{
     res.send('Server is ready')
 });

 //get a list of 5 jokes

 app.get('/api/jokes',(req,res)=>{
     const jokes=[
        {
           id:1,
           title:'A Joke',
           content:'This is a joke'  
        },
        {
            id:2,
            title:'second Joke',
            content:'This  is second joke'  
         },
         {
            id:3,
            title:'third Joke',
            content:'This is third joke'  
         },
         {
            id:4,
            title:'Fourth Joke',
            content:'This is Fourth joke'  
         },
         {
            id:5,
            title:'Fifth Joke',
            content:'This is Fifth joke'  
         }
     ];
     res.send(jokes);
 })

 const port=process.env.PORT || 3000;

 app.listen(port,()=>{
    console.log(`Server at https://localhost:${port}`);
    }
 );