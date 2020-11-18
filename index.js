const fs = require("fs");

fs.writeFile('./prueba.js','const os = require("os"); console.log(os.cpus());',function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('Archivo creado');
    }
    
});

console.log("Ultima línea de código");