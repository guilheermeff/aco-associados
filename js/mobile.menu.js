export function mobileMenu() {
  
  const buttonOpenMenu = document.querySelector('.openMenu')
  const buttonCloseMenu = document.querySelector('.closeMenu')
  const buttonLi = document.querySelector('ul li a')

  const navBar = document.querySelector('.nav-bar')
  console.log(navBar)
  
  const logo = document.querySelector('#logo')
  const body = document.querySelector('#body')

  buttonLi.addEventListener('click', () => {
    closeMenu()
  })

  buttonOpenMenu.addEventListener('click', () => {
    openMenu()
  })

  buttonCloseMenu.addEventListener('click', () => {
    closeMenu()
  })
  
  function openMenu() {
    clickButtonOpenMenu()
    openNavBar()
  }
  
  function closeMenu() {
    clickButtonCloseMenu()
    closeNavBar()
  }
  
  function clickButtonOpenMenu() {
    logo.classList.add('logo-expanded')
  
    buttonOpenMenu.classList.add('menu-expanded')
  
    buttonCloseMenu.classList.remove('menu-expanded')
    buttonCloseMenu.classList.add('iconMenu-expanded')
  
    body.classList.add('hold-body')
  }
  
  function clickButtonCloseMenu() {
    logo.classList.remove('logo-expanded')
  
    buttonOpenMenu.classList.remove('menu-expanded')
  
    buttonCloseMenu.classList.add('menu-expanded')
    buttonCloseMenu.classList.remove('iconMenu-expanded')
  
    body.classList.remove('hold-body')
  }
  
  function openNavBar(){
    navBar.classList.remove('menu-expanded')
  }
  
  function closeNavBar() {
    navBar.classList.add('menu-expanded')
  }
}