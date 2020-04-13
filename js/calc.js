//import Cell from './Cell.js';

class calculator {
    constructor( target ) {
        this.target = target;

        const calculator = document.querySelector(this.target)
        const keys = calculator.querySelector('#btn')
        

        
        keys.addEventListener('click', e => {
         if (e.target.matches('#btn')) {
            const key = target.e;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
         }
         console.log('#btn')
        })
        const key = target.e;
        const action = key.dataset.action;

        if (!action) {
            console.log('number key!')
        }
    }
}
const sent = new calculator('#count');

console.log(sent)