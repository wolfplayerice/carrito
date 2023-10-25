
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list"); 
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
cargarEventos();

function cargarEventos(){

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}