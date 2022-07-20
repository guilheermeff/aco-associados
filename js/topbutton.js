export class TopButton {
  constructor(backToTopButton) {
    this.backToTopButton = document.querySelector(backToTopButton)
    this.onScroll()
  }
  onScroll() {
    this.showBackToTopButtonOnScroll()
  }

  showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
}

