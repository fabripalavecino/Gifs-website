let busqueda = document.getElementById('barra-busqueda');
let enviar = document.getElementById('busca');
let resultadosSugeridos = document.getElementById('sugeridos');
const apiKey = "92C28WlFwVY4NJGckPqa78E21ZlPafD2";
const url = "https://api.giphy.com/v1/gifs/search?q="
let contenedor = document.getElementById('resultado-gifs-box');
const urlTrend = "https://api.giphy.com/v1/gifs/trending";
let contenedorSugeridos = document.getElementById('contenedor-sugeridos');
const hrefThemeNight = "https://fabripalavecino.github.io/Segundo-Proyecto/styles/theme2.css";
const misGuifos = document.getElementById('mis-guifos');
const tituloTendencias = document.getElementById('contenedor-titulo-gif');
const formBusqueda = document.getElementById('form-busqueda');



document.addEventListener('DOMContentLoaded', theme);
document.addEventListener('DOMContentLoaded', trendingGif);

class Gifs {
    constructor(image, title) {
        this.image = image
        this.title = title
    }
};


//drop-down boton de tema

function desaparece() {
    document.getElementById('lista-tema').classList.toggle('hide');
}

document.getElementById('drop-list').onclick = function() {
    desaparece();
}




function localStorageTema(){
    const temaPresente = document.querySelector('link').href;
    localStorage.setItem('tema', temaPresente);
}


//cambio de Theme 
const dayBtn = document.querySelector('.theme-day').addEventListener('click', () => {
    document.querySelector('link').href = "./styles/theme1.css";
    document.getElementById("logo-gifos").src = "./assets/gifOF_logo.png";
    document.getElementById('theme-day').classList.add('underline');
    document.getElementById('theme-night').classList.remove('underline');
    localStorageTema();
    desaparece();
});

const nightBtn = document.querySelector('.theme-night').addEventListener('click', () => {
    document.querySelector('link').href = "./styles/theme2.css";
    document.getElementById("logo-gifos").src = "./assets/gifOF_logo_dark.png";
    document.getElementById('theme-night').classList.add('underline');
    document.getElementById('theme-day').classList.remove('underline');
    localStorageTema();
    desaparece();
});



function theme(){
    
    const tema = localStorage.getItem('tema')
    if(tema){ 
        const linkTema = document.querySelector('link'); 
        linkTema.href = tema;
        if(linkTema.href === hrefThemeNight) { 
        document.getElementById("logo-gifos").src = "./assets/gifOF_logo_dark.png";}
        else{
        document.getElementById("logo-gifos").src = "./assets/gifOF_logo.png";
    }}else{
        document.getElementById("logo-gifos").src = "./assets/gifOF_logo.png";
        document.querySelector('link').href = "./styles/theme1.css";
    }
}


busqueda.addEventListener('keydown', () => {    
    if (busqueda.value !== '') {
        enviar.removeAttribute('disabled');
        enviar.classList.replace('btn-dis', 'pink-button');
        resultadosSugeridos.classList.remove('hide');
    }else{
        enviar.setAttribute('disabled','true');
        enviar.classList.replace('pink-button', 'btn-dis');
        resultadosSugeridos.classList.add('hide');
    }
    console.log(busqueda.value);

});

/*
function getVerMas() {
    const verMas = document.querySelectorAll('.link-sugerido');
    const contenedorGifs = document.querySelectorAll('.contenedor-gif');
    const tituloSugerido = document.querySelectorAll('.titulo-sugerido');
    verMas.forEach(element => {
        element.onclick = e => {
            let gifTag = contenedorGifs.tituloSugerido[e.target];
        fetch( url + gifTag.toString() + '&api_key=' + apiKey +'&limit=20')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let array = [];
            data.data.forEach(e => {
                array.push(new Gifs (
                    e.images.downsized_large.url,
                    e.title
                ))   
            });
            console.log(data);
            console.log(array);
            array.forEach(e =>{
                let busquedaResultado = document.createElement('figure');
                busquedaResultado.classList.add('result-gif');
                busquedaResultado.innerHTML = `<img src="${e.image}" class="img-gif" alt= "${e.title}">
                <figcaption class="gradient"></figcaption>`;
                contenedor.appendChild(busquedaResultado); 
                } )

        })
        
        .catch(error => {
            return error;
        });

        }
        
    });

}




window.addEventListener('load', getVerMas);
*/



function verMasButton0(){
    let btnSugerido0 = document.getElementById('button0');
    btnSugerido0.addEventListener('click', () =>{
        let verMas = document.getElementById('titulo0').innerText;
        verMas = verMas.substring(1);
        borrarResultadosAnteriores();
        busquedaVerMas(verMas);
    })
}

function verMasButton1(){
    let btnSugerido1 = document.getElementById('button1');
    btnSugerido1.addEventListener('click', () =>{
        let verMas = document.getElementById('titulo1').innerText;
        verMas = verMas.substring(1);
        borrarResultadosAnteriores();
        busquedaVerMas(verMas);
    })
}


function verMasButton2(){
    let btnSugerido2 = document.getElementById('button2');
    btnSugerido2.addEventListener('click', () =>{
        let verMas = document.getElementById('titulo2').innerText;
        verMas = verMas.substring(1);
        borrarResultadosAnteriores();
        busquedaVerMas(verMas);
    })
}


function verMasButton3(){
    let btnSugerido3 = document.getElementById('button3');
    btnSugerido3.addEventListener('click', () =>{
        let verMas = document.getElementById('titulo3').innerText;
        verMas = verMas.substring(1);
        borrarResultadosAnteriores();
        busquedaVerMas(verMas);
    })
}



function busquedaVerMas(verMas){
    fetch( url + verMas.toString() + '&api_key=' + apiKey +'&limit=20')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let array = [];
        data.data.forEach(e => {
            array.push(new Gifs (
                e.images.downsized_large.url,
                e.title
            ))   
        });
        console.log(data);
        console.log(array);
        array.forEach(e =>{
            let busquedaResultado = document.createElement('figure');
            busquedaResultado.classList.add('result-gif');
            busquedaResultado.innerHTML = `<img src="${e.image}" class="img-gif" alt= "${e.title}">
            <figcaption class="gradient"></figcaption>`;
            contenedor.appendChild(busquedaResultado); 
            } )

    })
    
    .catch(error => {
        return error;
    });
}

var input = document.getElementById("barra-busqueda");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("busca").click();
  }
});



function getSearchResults() {
    search = busqueda.value;
    resultadosSugeridos.classList.add('hide');
    busqueda.value = '';
    enviar.classList.replace('pink-button', 'btn-dis')
    tituloTendencias.innerText = 'Resultados para '+search;
    borrarResultadosAnteriores();
    const found = fetch( url + search.toString() + '&api_key=' + apiKey +'&limit=20')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let array = [];
            data.data.forEach(e => {
                array.push(new Gifs (
                    e.images.downsized_large.url,
                    e.title
                ))   
            });
            console.log(data);
            console.log(array);
            array.forEach(e =>{
                let busquedaResultado = document.createElement('figure');
                busquedaResultado.classList.add('result-gif');
                busquedaResultado.innerHTML = `<img src="${e.image}" class="img-gif" alt= "${e.title}">
                <figcaption class="gradient"></figcaption>`;
                contenedor.appendChild(busquedaResultado); 
                } )

        })
        
        .catch(error => {
            return error;
        });
}

function trendingGif(){
    //temas = ["dibujos animados","animals","dogs","series","europe","sports","cars", "famous","winter","guns","music"]
    
    const trends = fetch(url + "dibujos animados" + '&api_key=' +  apiKey +'&limit=4')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let vector = [];
            data.data.forEach(e => {
                vector.push(new Gifs (
                    e.images.downsized_large.url,
                    e.title
                ))   
            });
            console.log(data);
            console.log(vector);
            vector.forEach((e,index)=>{
                let htmlCode = document.createElement('figure');
                htmlCode.classList.add('contenedor-gif');
                htmlCode.setAttribute('id','contenedor'+index);
                htmlCode.innerHTML =  `
                
                    <figcaption class="gradient titulo-sugerido bold">
                        <span class="chakra font-3" id="titulo${index}" >#${e.title}</span>
                        <img src="./assets/close.svg" alt="cerrar">
                    </figcaption>
                    <img src="${e.image}" alt="Sugerido" class="gif-img">
                    <button class="button-6 chakra font-3 ver-mas link-sugerido" id="button${index}"><span class="borde-dotted-6">
                        Ver Más...
                    </span></button>
                ` 
                    ;
                contenedorSugeridos.appendChild(htmlCode);

            });
            verMasButton0();
            verMasButton1();
            verMasButton2();
            verMasButton3();

        })
        .catch(error => {
            return error;
        });
        
}



function borrarResultadosAnteriores() {
    if(contenedor.hasChildNodes()) {
        contenedor.innerHTML = '';
    }
}
