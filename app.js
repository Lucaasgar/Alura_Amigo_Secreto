let amigos = []
let lista = document.getElementById("listaAmigos")

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim()

    if(nombreAmigo.length === 0){
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombreAmigo)
        inputAmigo.value = "";
        actualizarAmigos()
    }

    console.log("Amigos: ", amigos)
}

function actualizarAmigos(){
    lista.innerHTML = ""
    

    amigos.forEach((amigo) => {
        let nuevoAmigo = document.createElement("li")
        nuevoAmigo.textContent = amigo
        lista.appendChild(nuevoAmigo)
    })
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    
    if(amigos.length === 0){
        alert("No hay amigos. Añadelos!")

    } else {
        let ind = Math.floor(Math.random() * amigos.length)
        let amigoSecreto = amigos[ind]
        
        amigos = []
        actualizarAmigos()
        resultado.innerHTML = amigoSecreto
    }
}