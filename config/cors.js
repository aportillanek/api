
var originsWhite = [
    
    process.env.URL_CORS

]

var corsOptions = {
    origin: function(origin,callback)
    {
        var isWhitelisted = originsWhitelist.indexOf(origin) != -1;
        callback(null, isWhitelisted);
    },
 credentials: true
}
module.exports = corsOptions;