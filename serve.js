const http = require('http');
/*Creo mi servidor */
const server= http.createServer((req,res)=>{
    res.end('Hola mundo');
})
/*Le doy funcionalidad */
const conectedServer = server.listen(8080,()=>{
    console.log('Servidor htto escuchando')
})

/*Al ejecutar  'node serve.js' */

