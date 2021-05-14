//Variable con al API a consumir
const API_URL = "https://rickandmortyapi.com/api/character";

//Consumir API
const getData = (API_URL) => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results);
      paginacion(json.info);
    })
    .catch((error) => console.log(error));
};

//Dibujar Cards
const dibujarData = (data) => {
  console.log(data);
  let html = "";
  data.forEach((pj) => {
    html += `<div class="col-md-4 mt-5">
     <div class="card" style="width: 20rem; height:80vh;">
     <img src="${pj.image}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 class=card-title text-center">${pj.name}</h5>
     <p class="card-text">${pj.gender}</p>
     <ul class="list-group list-group-flush">
    <li class="list-group-item"> Especie ${pj.species}</li>
    <li class="list-group-item">Estado ${pj.status}</li>
    <li class="list-group-item">Origen ${pj.origin.name}</li>

  </ul>
     </div>
     </div>
     </div>`
  });
  document.getElementById("pjdata").innerHTML = html;
};

//Paginación
const paginacion = (pag) => {
  let html = 
  `<li class="page-item ${pag.prev ? "" : "disabled"}">
    <a class="page-link" onclick="getData('${pag.prev}')"> Previ </a> </li>
    <li class="page-item ${pag.next ? "" : "disabled"}"> 
    <a class="page-link" onclick="getData('${pag.next}')"> Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

getData(API_URL);
