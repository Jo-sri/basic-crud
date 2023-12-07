const express=require('express')
const cors=require('cors')
const mysql=require('mysql');


const app=express();
app.use(express.json());
app.use(cors());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:'crud'
}
)
app.get('/use',(req,res)=>{
   const sql="SELECT * FROM users";
   db.query(sql,(err,data)=>{
    if(err) return res.json("Error");
    return res.json(data);
   })
})


app.get('/read/:id',(req,res)=>{
    const sql="SELECT * FROM users WHERE ID = ?"
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
     if(err) return res.json("Error");
     return res.json(data);
    })
})

 app.put('/update/:id',(req,res)=>{
    const sql=" UPDATE users SET `name`=? `email`=? `phone`=?  WHERE ID = ?"
    const id=req.params.id;
    const values=[
        req.body.name,
        req.body.email,
        req.body.phone
    ]
    db.query(sql,[values,id],(err,data)=>{
     if(err) return res.json("Error");
     return res.json(data);
    })
 })


app.post('/users',(req,res)=>{
        const sql="INSERT INTO users (`name`,`email`,`phone`) VALUES(?)";
        const values=[
            req.body.name,
            req.body.email,
            req.body.phone
        ]
        db.query(sql,[values],(err,result)=>{
            if(err) return res.json(err);
            return res.json(result);
        })
 })

 

app.delete('/delete/:id',(req,res)=>{
   const sql="DELETE FROM users WHERE ID = ?";
   const id=req.params.id;
   db.query(sql,[id],(err,data)=>{
       if(err) return res.json("err");
       return res.json(data);
   })
})

app.listen(8081,()=>{
    console.log('listening');
})