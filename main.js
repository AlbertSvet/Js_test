

async function postData(url){
    let res = await fetch(url,{
        method: "GET"
    })
    return await res.json();
}

function open(){
    postData('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
    .then(data =>{
        console.log(data);
        creat(data)
    })
    .catch(err =>{
        console.log(err)
    })
}
function creat(data){
  const newMass =  data.slice(0,6);
  const parent = document.querySelector('.container') 

  newMass.forEach(item => {
    const div = document.createElement('div')
    div.innerHTML =  `
        <p> Id: ${item.id} </p>
        <p>Name: ${item.name} </p>
    `
    parent.appendChild(div)
  });
  
}
open();



