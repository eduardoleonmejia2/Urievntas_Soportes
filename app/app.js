
let tabla = document.getElementById("tabla")
let idEgresos = document.getElementById("egresos")
let idIngresos = document.getElementById("ingresos")
let idFecha = document.getElementById("fecha")
let listaLibro = []

 function getLibros(){
    fetch('http://localhost/apilibro/')
    .then( response => { return response.json() })
    .then( libros => { listalibro = libros  }) 
    .then( () => {
        let plantilla = '';
        listalibro.forEach( item => {
           plantilla+=`<tr>
                         <td>${ item.id }</td>
                         <td>${ item.egresos }</td>
                         <td>${ item.ingresos }</td>
                         <td>${ item.fecha }</td>
                         <td><button onclick="deleteLibro(${item.id})"
                                     class="btn btn-danger">
                              Delete</button>
                         </td>
                        <tr>
                      `; }) //fin del forEach
       tabla.innerHTML = plantilla 
    })
}

getLibros();

function guardar(){
  let egresos = idEgresos.value
  let ingresos = idIngresos.value
  let fecha = idFecha.value
  const obj = { egresos, ingresos, fecha}
  fetch('http://localhost/apilibro/', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(obj), // data can be `string` or {object}!
    headers:{ 'Content-Type': 'application/json' }})
   .then(res => res.json())
   .catch(error => console.error('Error:', error))
   .then(response => { console.log(response)
    getLibros()
    idFecha.value=''
    idIngresos.value=''
    idEgresos.value=''});
}

function deleteLibro(id){
  console.log(id)
  fetch(`http://localhost/apilibro/?id=${id}`,{ method:'DELETE'})
  .then( response => { return response.json() })
  .then( response => {
     console.log(response) 
     getLibros()  
  }) 
}

