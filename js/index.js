import { MobileNavbar } from "./mobile.menu.js";
import { Router } from "./router.js";

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/home", "/pages/home.html")
router.add("/aco", "/pages/aco.html")
router.add("/escritorio", "/pages/escritorio.html")
router.add("/fiquePorDentro", "/pages/fique-por-dentro.html")
router.add("/zfm", "/pages/zfm.html")
router.add("/contato", "/pages/contato.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()