import Cell from './Cell.js';

class Minesweeper {
    constructor( target, width, height ) {
        this.target = target;
        this.DOM = null;
        this.DOMfield = null;
        this.width = width;
        this.height = height;


        //this.clickCount = 0;
        //this.cells = [];
        
    }

    init() {
        this.validate();
        this.render();
    }

    validate() {
        const DOM = document.querySelector(this.target);
        }

    render() {
        
        let HTML = `<div class="header">
                        <div class="calculator">Calculator</div>
                        <div class="standard">Standard</div>
                        <div class="show">Show</div>
                        <div class="memory">Memory</div>
                        
                    </div>
                    <div class="field"></div>`;
        this.DOM.classList.add('minesweeper');
        this.DOM.innerHTML = HTML;
        this.DOMfield = this.DOM.querySelector('.field');

        for ( let i=0; i<this.width * this.height; i++ ) {
            this.cells.push( new Cell(i, this) );
        }
    }
}

const game = new Minesweeper('#game', 10, 1);

console.log(game);