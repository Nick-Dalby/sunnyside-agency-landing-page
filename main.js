const menuBtn = document.querySelector('.menu')
const mobMenu = document.querySelector('.mobile-menu')

menuBtn.addEventListener('click', () => {
  mobMenu.classList.toggle('open')
})

