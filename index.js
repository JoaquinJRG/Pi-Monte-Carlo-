//Rango número de puntos
const numPuntos = document.getElementById("numPuntos"); 
const rangoPuntos = document.getElementById("rangoNum"); 

rangoPuntos.addEventListener("input", function() {
    numPuntos.textContent = rangoPuntos.value;
});

//Calcular PI 

const simular = document.getElementById("simular");
const resultadoPi = document.getElementById("resultadoPi");  

simular.addEventListener("click", function(){

    let totalPuntos = Number(numPuntos.textContent); 
    let puntosDentro = 0;
    let aproxPi;  

    for(let i = 1; i <= totalPuntos; i++){

        let punto = generarPunto(); 

        if(punto[0]*punto[0] + punto[1]*punto[1] <= 1){
            puntosDentro++; 
        }
    }

    aproxPi = 4*(puntosDentro/totalPuntos); 
    resultadoPi.textContent = aproxPi; 


}); 


//Calcular Puntos
function generarPunto(){
    let x; 
    let y; 

    x = Math.random();
    y = Math.random(); 
    
    
    return [x,y]; 
}