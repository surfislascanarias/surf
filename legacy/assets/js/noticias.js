
const noticias = [

{
title:"Resultados del campeonato nacional de surf",
source:"Federación Española de Surfing",
text:"La federación anuncia los resultados del último campeonato nacional.",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
link:"https://www.fesurf.es"
},

{
title:"El circuito mundial llega a Portugal",
source:"World Surf League",
text:"La WSL continúa su gira europea con grandes condiciones de olas.",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
link:"https://www.worldsurfleague.com"
},

{
title:"Nuevas promesas del surf canario",
source:"Surf Islas Canarias",
text:"Jóvenes surfistas de Canarias destacan en competiciones nacionales.",
image:"https://images.unsplash.com/photo-1502680390469-be75c86b636f",
link:"#"
},

{
title:"El Quemao Class vuelve con fuerza",
source:"Surf Lanzarote",
text:"Uno de los eventos más espectaculares del surf europeo regresa.",
image:"https://images.unsplash.com/photo-1527261834078-9b37d35a4a32",
link:"#"
},

{
title:"Gran Canaria refuerza su posición surf internacional",
source:"Surf City Las Palmas",
text:"La ciudad sigue posicionándose como referencia del surf europeo.",
image:"https://images.unsplash.com/photo-1501959915551-4e8d30928317",
link:"#"
}

];


const grid = document.getElementById("newsGrid");

noticias.forEach(noticia=>{

const card = document.createElement("article");

card.className="news-card";

card.innerHTML=`

<img src="${noticia.image}" alt="${noticia.title}">

<div class="news-content">

<div class="news-source">${noticia.source}</div>

<div class="news-title">${noticia.title}</div>

<div class="news-text">${noticia.text}</div>

<a href="${noticia.link}" target="_blank" class="news-link">
Leer noticia →
</a>

</div>

`;

grid.appendChild(card);

});
