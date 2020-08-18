import { parameters, views } from './configGeo';
// import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateFeedbackSection, resetDOM } from './UI';
import Interval from './intervals';

let ggbApp = new GGBApplet(parameters, '5.0', views);

// class State {
//     constructor() {
//         this.domains = [];
//         this.ranges = [];
//         this.feedback = [];
//         this.codebases = [];
//         this.currentIndex = 0;
//         this.counter = 0;
//     } 

//     addInputInterval(interval, axis) {
//         if (axis = 'x') {
//             this.domains.push(interval);
//         } else if (axis === 'y') {
//             this.ranges.push(interval)
//         }
//         this.currentIndex = this.domains.length - 1;
//         this.counter = this.domains.length -1;
//     }

// }

// let ggbAppState = new State();


function update() {
    const baseInc = parseFloat(getInputValue('baseInc'));
    const finalInc = parseFloat(getInputValue('finalInc'));
    const tax = ggb.updateTax(baseInc, finalInc);
    updateFeedbackSection(baseInc, finalInc, tax);
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    elements.baseIncImput.focus();
    elements.submit.addEventListener('click', update);
    elements.newIncBtn.addEventListener('click', resetDOM)
}
