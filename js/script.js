import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();
