import { Router } from "./router.js";
import { onScroll } from "./topbutton.js";
import { mobileMenu } from "./mobile.menu.js";

const router = new Router()
const mobilemenu = mobileMenu()
const scroll = onScroll()


router.add("/", "/pages/home.html")
router.add("/home", "/pages/home.html")
router.add("/aco", "/pages/aco.html")
router.add("/escritorio", "/pages/escritorio.html")
router.add("/fiquePorDentro", "/pages/fique-por-dentro.html")
router.add("/zfm", "/pages/zfm.html")
router.add("/contato", "/pages/contato.html")
router.add("/direitoEmpresarial", "/pages/direito-empresarial.html")
router.add("/direitoCivil", "/pages/direito-civil.html")
router.add("/direitoTributario", "/pages/direito-tributario.html")
router.add("/direitoAdministrativo", "/pages/direito-administrativo.html")
router.add("/direitoTrabalhista", "/pages/direito-trabalhista.html")
router.add("/direitoPatrimonial", "/pages/direito-patrimonial.html")
router.add("/direitoDigital", "/pages/direito-digital.html")

router.add("/tributacaoNaEraDigital", "/pages/articles/tributacao-na-era-digital.html")
router.add("/certidaoDividaAtiva", "/pages/articles/certidao-divida-ativa.html")
router.add("/repercussaoDosIncentivosFiscais", "pages/articles/repercussao-dos-incentivos-fiscais.html")
router.add("/matrimonioJuridico", "/pages/articles/matrimonio-juridico.html")
router.add("/netflixSpotify", "/pages/articles/netflix-spotify.html")
router.add("/creditoPisCofins", "/pages/articles/credito-pis-cofins.html")
router.add("/oContribuinte", "/pages/articles/o-contribuinte.html")
router.add("/planejamentoTributario", "/pages/articles/planejamento-tributario.html")

router.handle()
// (find line function) window.route = () => router.route()
window.onpopstate = () => router.handle()