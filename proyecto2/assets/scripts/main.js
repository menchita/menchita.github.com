//alert("hola mundo JS");
//console.log("hola mundo js en consola");
//DOC (document object model)

//let element = document.querySelector(".fa-hand-rock");
//elementos dentro de DOM son Nodos

// let elementlist = document.querySelectorAll(".fa-hand-rock");

// elementlist.forEach(function(element){
//     element.addEventListener('click',function(){
//         alert("Mano Clickeada");
//     })
// });


//eventos 

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

 closes.forEach(function(close){
     close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated")
        content.classList.remove("flash")
        content.classList.add("animated")
        content.classList.add("pulse")
        setTimeout(() => {
            location.href="/";
        }, 1000);
        
     });
})