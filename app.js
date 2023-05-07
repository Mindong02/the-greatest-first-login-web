const express = require("express")
const app=express()
const fs=require("fs")
const port=8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})

app.get('/page/:id',(req,res)=>{ // /page/id로 해서 안됨. why? :가 있어야 그 뒤를 매개변수로
    // app이 이해를 하기 때문 따라서 /:id를 하면 id가 매개변수로 작동하고 나는 그 매개변수
    // 를 어떻게 사용하는지 몰랐던거임
    const id=req.params.id
    res.send(`${id}페이지 입니다.`)
})

app.post('/login',(req,res)=>{
    if(req.body.ID==="abc"&&req.body.PW==="password"){
        res.send("login success");    
    }
    else{
        res.send("login fail");
    }
})

app.listen(port,()=>{
    console.log(`서버 실행, http://localhost:${port}/home`)
})