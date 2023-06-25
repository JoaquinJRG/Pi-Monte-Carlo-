//Rango número de puntos
const numPuntos = document.getElementById("numPuntos"); 
const rangoPuntos = document.getElementById("rangoNum"); 

rangoPuntos.addEventListener("input", function() {
    numPuntos.textContent = rangoPuntos.value;
});

//Calcular PI 

const simular = document.getElementById("simular");
const resultadoPi = document.getElementById("resultadoPi");  
const totalPuntosSalida = document.getElementById("totalPuntos"); 
const puntosDentroSalida = document.getElementById("puntosDentro"); 

simular.addEventListener("click", function(){

    borrarPuntos(); 

    let totalPuntos = Number(numPuntos.textContent); 
    let puntosDentro = 0;
    let aproxPi;  

    for(let i = 1; i <= totalPuntos; i++){

        let punto = generarPunto(); 
        
        dibujarPunto(punto)

        if(punto[0]*punto[0] + punto[1]*punto[1] <= 1){
            puntosDentro++; 
        }

    }

    //Calculo de PI
    aproxPi = 4*(puntosDentro/totalPuntos); 

    //Mostramos los resultados
    resultadoPi.textContent = aproxPi; 
    totalPuntosSalida.textContent = totalPuntos; 
    puntosDentroSalida.textContent = puntosDentro; 

}); 


//Calcular Puntos
function generarPunto(){
    let x; 
    let y; 

    x = Math.random();
    y = Math.random(); 
    
    
    return [x,y]; 
}

//Canvas 
let canvas = document.getElementById("grafico");
let ctx = canvas.getContext("2d");

//Dibujar Circulo
let centerX = 0
let centerY = 500;
var radius = 500;
var startAngle = 1.5 * Math.PI;
var endAngle = Math.PI;

ctx.beginPath(); 
ctx.arc(centerX, centerY, radius, startAngle, endAngle);
ctx.stroke();

// Dibujar puntos

function dibujarPunto(punto){

    let x = Math.floor(punto[0] * 500);
    let y = Math.floor(punto[1] * 500);
    
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);

    if((x)*(x) + (y - 500)*(y - 500) <= 500*500){
        ctx.fillStyle = "#0075FF";
    }else{
        ctx.fillStyle = "#ef4565";
    }

    ctx.fill();
    ctx.stroke(); 

}

//Eliminar Puntos 
function borrarPuntos(){
    ctx.clearRect(0,0,500,500); 
    ctx.beginPath(); 
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}



