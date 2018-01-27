let con =require('./connect_mongo');
let user_json={
  nombre:String,
  email:String,
  username:String,
  password:String

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
