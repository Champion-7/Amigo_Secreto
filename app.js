let contadorAmgios = 0;
let listaAmigo = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){

    nombre = document.getElementById('amigo').value;

    if(nombre == " ")
        {
        asignarTextoElemento('p' ,'Tienes que escribir un nombre, no has agregado ningún amigo');
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus;
        }
        else if(listaAmigo.includes(nombre)){
            asignarTextoElemento('p' , 'Este nombre ya está en tu lista de amigos');
            document.getElementById('amigo').value = "";
            document.getElementById('amigo').focus;
        }
        else {
            listaAmigo.push(nombre);
            console.log(listaAmigo);
            contadorAmgios++;
            asignarTextoElemento('h3' , nombre)
            document.getElementById('amigo').value = "";
            document.getElementById('amigo').focus;

    imprimirLista();
    }
}
function imprimirLista() {

    if ( contadorAmgios == 0) {
        asignarTextoElemento('h3', "¡No hay amigos en la lista!");
    }else{
        asignarTextoElemento('h3',`La lista de amigos es: ${listaAmigo}`);
    }
}

function sortearAmigo(){

    let sorteo = listaAmigo[Math.floor(Math.random() * contadorAmgios)];
    console.log(sorteo);

        if(sorteo == undefined){ 
            alert('No hay amigos para sortear');
        }
        else{
            alert(sorteo);
            asignarTextoElemento('h3' , `El amigo sorteado es ${sorteo}`);
        }
}





