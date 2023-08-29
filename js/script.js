import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import ScrollAnima from "./modules/scroll-anima";
import Tooltip from "./modules/tooltip"
import fetchAnimais from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');