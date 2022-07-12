export class MobileNavbar {
  constructor(mobileMenu, navList, navlinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navlinks = document.querySelectorAll(navlinks);
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navlinks.forEach((link) => {
    link.style.animation
    ? (link.style.animation = "")
    : (link.style.animation = `navLinksFade 0.5s ease forwards 0.3s`) ;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }


  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}