import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabnav";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
accordion.init();
