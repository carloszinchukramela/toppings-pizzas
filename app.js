const listaDeToppings = document.getElementById('lista-toppings');
console.log (listaDeToppings.innerText);
console.log (listaDeToppings.textContent);
console.log (listaDeToppings.innerHTML);

const toppings = document.getElementsByClassName("topping"); 

function mostrarClick(e){
    console.log(e.target.innerText);
}

for (const topping of toppings){
    topping.addEventListener('click', mostrarClick); 
}

const toppingsMarron =  document.getElementsByClassName("fondo-marron");

for (const marron of toppingsMarron){
    marron.onmouseover = function(){
    marron.style.backgroundColor = "rgb(156, 101, 101)";
}}
 for (const marron of toppingsMarron){
    marron.onmouseout = function(){
    marron.style.backgroundColor = "burlywood";
}}

const toppingsNaranja =  document.getElementsByClassName("fondo-naranja");

for (const orange of toppingsNaranja){
    orange.onmouseover = function(){
    orange.style.backgroundColor = "rgb(156, 101, 101)";
}}
 for (const orange of toppingsNaranja){
    orange.onmouseout = function(){
    orange.style.backgroundColor = "rgb(241, 197, 114)";
}}
//podemos definir la fn si no es muy compleja. Ej. ('click', (e) => {console.log(e.target.innerText);} )

