let con =require('./connect_mongo');
let user_json={
  nombre:{type:String,required:true,maxlength:[30,"El nombre no debe excede los 30 caracteres"]},
  email:{type:String,match:[/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,"el email no es valido"]},
  password:{
  type:String,
  minlength:[5,"El password debe contener 5 caracteres o mas"],
  validate:{
    validator(pass){
      return this.password_confirm==pass;
    },
    message: "Las contraseñas no coinciden"
  }

  }

};
let user_schema=new con.Schema(user_json);
let User =con.mongoose.model('User',user_schema);
module.exports.User=User;
user_schema.virtual('password_confirm').get(function()
{
  return this._password_conf;
}).set(function(pass){
  this._password_conf=pass;
});
