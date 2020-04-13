//import Cell from './Cell.js';

class calculator {
    constructor( target ) {
        this.target = target;

        const calculator = document.querySelector(this.target)
        const keys = calculator.querySelector('#btn')

        
        keys.addEventListener('click', (e) => {
                if (e.target.matches('#btn')) {
                    const key = e.target;
                    const action = key.dataset.action;
                    const keyContent = key.textContent;
                    const displayedNum = keyContent.textContent;
                
                    console.log(action)
                    if (!action) {
                        if (displayedNum === '0') {
                        display.textContent = keyContent
                        } else {
                        display.textContent = displayedNum + keyContent
                        }
                    }
                    Array.from(key.parentNode.children)
                    .forEach(k => k.classList.remove('is-depressed'))
                }
            })
    }
}
const sent = new calculator('#count');

console.log(sent)
