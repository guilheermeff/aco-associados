import { Router } from "./router.js";
import { onScroll } from "./topbutton.js";
import { mobileMenu } from "./mobile.menu.js";


const scroll = onScroll()
const mobilemenu = mobileMenu()
const router = new Router()

router.add("/", "/pages/home.html")
router.add("/home", "/pages/home.html")
router.add("/aco", "/pages/aco.html")
router.add("/escritorio", "/pages/escritorio.html")
router.add("/fiquePorDentro", "/pages/fique-por-dentro.html")
router.add("/zfm", "/pages/zfm.html")
router.add("/contato", "/pages/contato.html")

router.handle()
// (find line function) window.route = () => router.route()
window.onpopstate = () => router.handle()

