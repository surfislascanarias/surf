// =================================
// EVENTOS INTERACCIONES PREMIUM
// =================================

document.addEventListener("DOMContentLoaded", function(){


// animación de entrada

const cards = document.querySelectorAll(".categoria-card");

cards.forEach((card, index)=>{

card.style.opacity="0";
card.style.transform="translateY(20px)";

setTimeout(()=>{

card.style.transition="all 0.6s ease";
card.style.opacity="1";
card.style.transform="translateY(0px)";

}, index * 120);

});



// efecto hover dinámico

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


});
