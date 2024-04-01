 "use strict"
 const newData = JSON.parse(data);
 console.log(newData);
 
 const divContent = document.querySelector('.content');
 
 newData.forEach(element => {
   divContent.insertAdjacentHTML('beforeend', `
   <div class="wrapper">
     <h2>${element.title}</h2>
     <h3>${element.body}</h3>
     <p>${element.id}</p>
   </div>
   `)
 });