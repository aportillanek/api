let User= require('../models/user').User;
let crearToken= require('../servicios/crearToken');
module.exports = {
    Index(req,res,next)
    {
      res.render('index',{nombre:'anthony'});
    },

    Registrar(req,res,next)
    {
       let user=new User({
         nombre:req.body.nombre,
         email:req.body.email,
         username:req.body.username,
         password:req.body.password,
         password_confirm:req.body.password_confirm

       });
       user.save().then(()=>{
         return res.status(200).send({mensaje:"Se ha guardo el usuario",token:crearToken(user)});
         
       },(err)=>{
         console.log(String(err));
         return res.status(500).send({mensaje: "No pudimos guardar el usuario",err:String(err)});
        
       });
    },
    Login(req,res,next)
    {
      User.find({username:req.body.username,password:req.body.password},function(err,doc){
        if(err) res.status(err.status || 500).json({mensaje: "Tuvimos un error inesperado"});
        if(doc.length==0)
        {
          res.status(400);
          res.json({mensaje:"No encontramos coicidencias"});
        }
        else {
          res.status(200);
          res.json(doc);
        }
      })
    }

};
