let busqueda = document.getElementById('barra-busqueda');
let enviar = document.getElementById('busca');
let resultadosSugeridos = document.getElementById('sugeridos');
const apiKey = "92C28WlFwVY4NJGckPqa78E21ZlPafD2";
const url = "http://api.giphy.com/v1/gifs/search?q="
let contenedor = document.getElementById('resultado-gifs-box');
const urlTrend = "http://api.giphy.com/v1/gifs/trending";
let contenedorSugeridos = document.getElementById('contenedor-sugeridos');

document.addEventListener('DOMContentLoaded', theme);

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

const hrefThemeNight = "http://127.0.0.1:5500/styles/theme2.css";
const hrefThemeDay = "http://127.0.0.1:5500/styles/theme1.css";


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
//document.addEventListener('DOMContentLoaded', theme);
enviar.addEventListener('click', getSearchResults);
document.addEventListener('DOMContentLoaded', trendingGif);


function getSearchResults() {
    let search =  busqueda.value;
    resultadosSugeridos.classList.add('hide');
    busqueda.value = '';
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
                //console.error("fabri:",e.image);
                let busquedaResultado = document.createElement('figure');
                busquedaResultado.classList.add('result-gif');
                busquedaResultado.innerHTML = `<img src="${e.image}" class="img-gif" alt= "${e.title}">
                <figcaption class="gradient"></figcaption>`;
                contenedor.appendChild(busquedaResultado);
                //console.error('con',contenedor);
                } )
                
            //return data;

        })
        
        .catch(error => {
            return error;
        });
    //return found;
}

function trendingGif(){
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
            vector.forEach(e=>{
                let htmlCode = document.createElement('figure');
                htmlCode.classList.add('contenedor-gif');
                htmlCode.innerHTML =  `
                
                    <figcaption class="gradient titulo-sugerido bold">
                        <span class="chakra font-3" >#${e.title}</span>
                        <img src="./assets/close.svg" alt="cerrar">
                    </figcaption>
                    <img src="${e.image}" alt="Sugerido" class="gif-img">
                    <a class="button-6 chakra font-3 ver-mas link-sugerido"><span class="borde-dotted-6">
                        Ver Más...
                    </span></a>
                ` 
                    ;
                contenedorSugeridos.appendChild(htmlCode);
            });

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

