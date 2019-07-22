const express = require("express")
const path = require("path")
const app = express();
const port = process.env.port || 1234
app.use(express.json())
app.use(express.urlencoded(
     {
          extended : true
     }
))
app.use('/' , express.static('../client'))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type' , "text/html")
    res.sendFile(path.join(__dirname,'../client/index.html'))
})
app.get('/city',(req,res)=>{
     res.setHeader('Content-Type' , "text/html")
     res.sendFile(path.join(__dirname,'../client/city.html'))
 })
let hobbi;

app.post('/form',(req,res)=>{
      console.log(req.body);
      hobbi = req.body.hobbies;
      console.log(hobbi);
      return res.redirect('http://localhost:1234/');
})



app.post('/country',(req,res)=>{
      console.log(req.body);
      if(req.body.option == 'India')
      {
      res.send(
           {
                countrys : ['delhi','mumbai','kolkata']
           }
           )
          }
          else if(req.body.option == 'Canada')
          {
          res.send(
               {
                    countrys : ['toronto','calgary','ottawa']
               }
               )
              }
          else{
               res.send(
               {
                    countrys : ['california','chicago','Dallas']
               }
                    )
          }
          
})


app.get('/hobbies',(req,res)=>{
     res.send(hobbi);
})

app.post('/multipleselect',(req,res)=>{
     console.log(req.body)
})

app.get('/multiple',(req,res)=>{
     res.setHeader('Content-Type' , "text/html")
     res.sendFile(path.join(__dirname,'../client/multipleSelect.html'))
})

app.listen( port ,() => console.log(`server started on port http://localhost:${port}`))