let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sistema');
let Schema = mongoose.Schema;

module.exports ={
  Schema:Schema,
  mongoose:mongoose
};
