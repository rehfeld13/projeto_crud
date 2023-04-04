const buttonMenuAbrir = document.querySelector('.buttonMenu')
const menuMobile = document.querySelector('.menu-mobile')
const buttonDelete = document.querySelector('.buttonDelete')

buttonMenuAbrir.addEventListener('click', ()=>{
  menuMobile.classList.add('visibility')
})

buttonDelete.addEventListener('click', ()=>{
  menuMobile.classList.remove('visibility')
})