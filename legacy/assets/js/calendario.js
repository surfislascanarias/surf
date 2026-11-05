let events = [];

fetch("assets/data/eventos.json")

.then(res=>res.json())

.then(data=>{

events = data.filter(e=>e.category==="elite");

renderCalendar();
renderEvents();

});


function renderCalendar(){

const calendar = document.getElementById("calendar");

calendar.innerHTML="";

for(let i=1;i<=31;i++){

let day=document.createElement("div");

day.className="day";

day.innerHTML=i;

let hasEvent=events.find(e=>parseInt(e.day)===i);

if(hasEvent){

day.classList.add("has-event");

}

calendar.appendChild(day);

}

}


function renderEvents(){

const container=document.getElementById("eventList");

container.innerHTML="";

events.forEach(event=>{

let div=document.createElement("div");

div.className="event-card";

div.innerHTML=`

<div class="event-title">${event.title}</div>

<div class="event-date">${event.date}</div>

<div class="event-location">${event.location}</div>

`;

container.appendChild(div);

});

}
