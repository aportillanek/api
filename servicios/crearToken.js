var jwt=require('jwt-simple');
var moment=require('moment');
var config=require('../config/config');

function crearToken(user)
{
    var payload={
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix()
    }
    return jwt.encode(payload,config.SECRET_TOKEN);
}
module.exports=crearToken;