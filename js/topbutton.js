export function onScroll() {
  const backToTopButton = document.querySelector('.backToTopButton')

  window.addEventListener('scroll', () => {
    showBackToTopButtonOnScroll()
  })

  function showBackToTopButtonOnScroll() {
    if(scrollY > 550){
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
}
