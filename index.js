const URL ='https://swapi.dev/api/';
const PEOPLE ='people/';

const opt = { crossDomain : true }

const ul = document.getElementById('container')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let clear = document.getElementById('clear')

const look = (id, tag ) => {
  const actor =`${URL}${PEOPLE}${id}/`
  const li = document.createElement('li')
  $.get(actor, opt, function () {
    li.innerText = `${id}. Hola yo soy: ${arguments[0].name}. `
    tag.append(li)
  });
};

const show = () => {
let id = parseFloat(text.value)
if( id ) look(id, ul)
else alert('por favor dijite un id válido')
text.value='';
}

const enter = ()=> event.key ==='Enter' ? show() : console.log('otra');


const erase =() =>{
  if(ul.firstChild) ul.removeChild(ul.firstChild)
  else alert(`No tienes elementos para borrar`)
}

btn.addEventListener('click', show)
text.addEventListener("keyup", enter)
clear.addEventListener('click', erase)


//segunda api

const URLa   ='https://rickandmortyapi.com/api/character/';

const ul2 = document.getElementById('container2')
let text2 = document.getElementById('text2')
let btn2 = document.getElementById('btn2')
let borrar = document.getElementById('borrar')


const obt = data =>{
  let li2 = document.createElement('li')
  li2.innerText = `${data.id}. Hola yo soy: ${data.name}. `
  ul2.append(li2)
}


const look2 = (id) => {
  const actor2 =`${URLa}${id}/`
  $.get(actor2, opt, obt);
}

const show2 = () =>{
  let id = parseFloat(text2.value)
  if(id)look2(id)
  else alert('Por favor poner un id válido')
 text2.value = ''
}
const erase2 =() =>{
  if(ul2.firstChild) ul2.removeChild(ul2.firstChild)
  else alert(`No tienes elementos para borrar`)
}
const enter2 = ()=> event.key ==='Enter' ? show2() : console.log('otra');

btn2.addEventListener('click',show2)
text2.addEventListener("keyup", enter2)
borrar.addEventListener('click', erase2)
