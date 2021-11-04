
class Book{
    constructor( title, author){
    this.title= title;
    this.author= author;
}
};
class Usuario{
    constructor(nombre , apellido, libros, mascotas ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };
    
    /*Funcion que muestre nombre */
    getName(){
        console.log(`Buenas tardes ${this.nombre}`+` ${this.apellido}`)   
    };
    
    addMascotas(animal){
        return(`${this.mascotas.push(animal)}`)
    }
    
    showMascotas(){
        return(`tus mascotas son: ${this.mascotas}. Un total de: ${this.mascotas.length} `)
    }
    
    addBook(t, a){
        let libro= new Book(t,a);
        (`${this.libros.push(libro)}`)
        return console.log(person.libros)
    }

    getBooknames(){
        let titulos= this.libros.map(element => element.title)
        return titulos;
    }


};

let person = new Usuario('Juan Pedro', 'Gonzales', [], []);

person.getName();

person.addMascotas('gato');

console.log(person.showMascotas())

person.addBook('El italiano', 'Arturo Pérez')

person.addBook('Una vida sin principios', 'Henry David Thoreau')

console.log(person.getBooknames())

