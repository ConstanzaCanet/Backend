const fs = require('fs');


/*Para crear un id random---> en este caso lo utilice en consola y tome el id*/
const makeRandomId= (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
};


/*Creo la clase contenedor que va a servir para la creacion del archivo que yo quiera */
class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo= nombreArchivo;
    };

        /*Funcion que guarde objeto en archivo---> Esto reescribe el archivo */
        save(name){
            let data =[{nombre:name , id:makeRandomId(10) }];

            try{
                fs.writeFileSync(this.nombreArchivo, JSON.stringify(data))
                return console.log('Exelente');
            }catch(error){
                throw new Error('No se Rick, parece falso... algo salio mal!')
            }
        };
        /*Seleccionar o buscar por id */
        
        getById(id){
            const array= JSON.parse(this.getAll());
        
            const elementoX = array.filter(element => element.id === id);
            console.log(elementoX);
        };
        
        /*Elimina el objeto que busco por id*/
        deleteById(id){
            
                const array= JSON.parse(this.getAll());
        
                const filtrado = array.filter(element => element.id != id);
                if (filtrado.length != 0){
                   return fs.writeFile(this.nombreArchivo, JSON.stringify(filtrado), error=>{
                       if (error) {
                           console.log('Algo no funciono')
                       }else{
                        console.log('Guardo el cambio')
                        console.log(this.getAll("./objectSaved.txt"))
                       }
                   });
                }
        };
        
        
        /*Muestro todo lo que hay en el archivo */
        getAll(){
            try{
                const todo=fs.readFileSync(this.nombreArchivo, 'utf-8');
                return todo;
            }catch(error){
                throw new Error('Me parece que no hay nada...')
            }
        }
        
        /*Creo una funcion que agregue objeto */
        addObject(nuevo){
            let nuevoP = {nombre: nuevo, id: makeRandomId(10)}
            const objeticosAntes = JSON.parse(this.getAll())
            const objeticosNuevos=[...objeticosAntes, nuevoP];
            try{
                fs.writeFileSync(this.nombreArchivo, JSON.stringify(objeticosNuevos))
                return console.log('Exelente, agregado');
            }catch(error){
                throw new Error('No se Rick, parece falso... algo salio mal!')
            }
        };
        
        
        
        
        /*Elimina todo lo que hay en el archivo ----> hice uno que borra lo que hay adentro */
        deleteAll(ruta){
            fs.truncate(ruta, 0, function(){console.log('eliminado')})
        };
        
        /*Creo uno que elimine el archivo en si */
        deletFile(ruta){
        
            fs.unlink(ruta, error =>{
                if (error) {
                    console.log('Upss! Algo salio mal!')
                }else{
                    console.log('Objetivo eliminado')
                }
            })
        }
    
};




/*--------------------------------------------------------------------------------------------------*/
/*Probando, probando, 1 - 2 - 3 */
/*Creo un objeto que tenga el tipo y el nombre del archivo*/
const contenedorP = new Contenedor("objectSaved.txt");

/*Aplico metodos para ir manipulando*/
contenedorP.save('pepitos');
contenedorP.addObject('merengadas');
contenedorP.addObject('galletas_miel');
contenedorP.addObject('sanguches');

console.log(contenedorP.getAll("./objectSaved.txt"));




/*
contenedorP.getById("coloque_id_aqui");
*/

/*
contenedorP.deleteAll("./objectSaved.txt");*/

/*contenedorP.deletFile("./objectSaved.txt")*/



