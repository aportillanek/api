let fs =require('fs');
let path=require('path');
let archivos=fs.readdirSync(__dirname);

archivos.forEach(function(archivo)
{
   let fileName = path.basename(archivo, '.js');
   if(fileName !=='index')
   {
     exports[fileName]=require(`./${fileName}`);
   }

});
