const express=require('express');
const router=express.Router();
const app=express();

// router.get('/',(req,res)=>{
//     const id=req.query.id;
//     const name=req.query.name;
//     res.send(`name=${name},id=${id}`);
//     res.send(`id=${id}`);
// });
router.get('/:id/:name',(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    res.send(`<h1>name=${name},id=${id}</h1>`)
})
router.get('/login',(req,res)=>{
    res.cookie('name','express');
    res.cookie('age','1min');
    res.end();
});
router.use('/register',(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + '/views/login.html');
});

module.exports=router;
