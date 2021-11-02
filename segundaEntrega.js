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

/*Clase que se va a crear para el pasaje de datos */
class Objeto{
    constructor(nombre, id){
        this.nombre= nombre;
        this.id = id;
    }
};
/*Determino objeto */
const objetico = new Objeto("objetico", 'vaCyDMtQ0W')
const objetico1= new Objeto("objetico1", 'r8gl9ZxivH');

const Envio=[
    objetico, 
    objetico1
]
/*nombre del archivo*/
const Archivo= "objectSaved.txt"

/*Funcion que guarde objeto en archivo---> Esto reescribe el archivo */
const save=(archivo, data)=>{
    try{
        fs.writeFileSync(archivo, data)
        return console.log('Exelente');
    }catch(error){
        throw new Error('No se Rick, parece falso... algo salio mal!')
    }
} 
/*Seleccionar o buscar por id */

const getById=()=>{
    const array= JSON.parse(getAll(archivo));
}

/*Elimina el objeto que busco por id*/
const deleteById=(id, archivo)=>{
    
        const array= JSON.parse(getAll(archivo));

        const filtrado = array.filter(element => element.id != id);
        if (filtrado.length != 0){
           return fs.writeFile(Archivo, JSON.stringify(filtrado), error=>{
               if (error) {
                   console.log('Algo no funciono')
               }else{
                console.log('Guardo el cambio')
                console.log(getAll("./objectSaved.txt"))
               }
           });
        }
};


/*Muestro todo lo que hay en el archivo */
const getAll=(archivo)=>{
    try{
        const todo=fs.readFileSync(archivo, 'utf-8');
        return todo;
    }catch(error){
        throw new Error('Me parece que no hay nada...')
    }
}

/*Creo una funcion que agregue objeto */
const addObject=(nuevo)=>{
    const objeticosAntes = JSON.parse(getAll(Archivo))
    const objeticosNuevos=[...objeticosAntes, nuevo];
    save(Archivo, JSON.stringify(objeticosNuevos));
    return 'Actualizado!'
};




/*Elimina todo lo que hay en el archivo ----> hice uno que borra lo que hay adentro */
const deleteAll=(ruta)=>{
    fs.truncate(ruta, 0, function(){console.log('eliminado')})
};

/*Creo uno que elimine el archivo en si */
const deletFile=(ruta)=>{

    fs.unlink(ruta, error =>{
        if (error) {
            console.log('Upss! Algo salio mal!')
        }else{
            console.log('Objetivo eliminado')
        }
    })
}


/*--------------------------------------------------------------------------------------------------*/
/*Probando, probando, 1 - 2 - 3 */

save(Archivo, JSON.stringify(Envio));

console.log(getAll("./objectSaved.txt"));

/*deleteById('vaCyDMtQ0W',"./objectSaved.txt");*/

/*deleteAll("./objectSaved.txt");*/

/*deletFile("./objectSaved.txt")*/


