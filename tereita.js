/*function mostrarLetras(palabras, termine){

    for (let i = 0; i <= palabras.length; i++) {
        const letra = palabras.charAt(i);
        console.log(letra)
    }
    
    termine()

}
const fin =()=> console.log("termine de deletrear!")

let probando = "probando";

mostrarLetras(probando,fin);

Usando setTime */

function mostrarLetras(palabra,termine){
    let i=0
    let tiempo= setInterval(()=>{
        if(i< palabra.length){
            console.log(palabra[i])
            i++
        }else{
            clearInterval(tiempo)
            termine()
        }
    },1000)
}
const fin =()=> console.log("termine de deletrear!")
let probando = "probando";

mostrarLetras(probando,fin);
