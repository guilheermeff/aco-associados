export function reveal() {  
  
  const orangeBar = document.querySelector('.orange-bar')
  const header = document.querySelector('header')
  const navBar = document.querySelector('.box-nav-menu')
  const page = document.querySelector('#page')
  const footer = document.querySelector('footer')
  const area1 = document.querySelector('section .area-1')
  console.log(area1)

  ScrollReveal().reveal(orangeBar, {
    delay: 300
  })

  ScrollReveal().reveal(header, {
    delay: 300
  })

  ScrollReveal().reveal(navBar, {
    delay: 700
  })

  ScrollReveal().reveal(page, {
    delay: 400
  })

  ScrollReveal().reveal(footer, {
    delay: 400
  })

  window.sr = ScrollReveal({reset: true})
}



