class Model {
    constructor() {
        this.count = 0;
    }

    increament(){
        this.count++;
    }

    decreament(){
        this.count--;
    }

    reset(){
        if (!confirm("Вы действвительное хотите сбросить")) return;
        this.count = 0;
    }

    getCount(){
        return this.count;
    }

}
class View {
    constructor() {
        this.countElement = document.getElementById("counter");

        this.incBtn = document.getElementById("increment");
        this.decBtn = document.getElementById("decrement");
        this.resetBtn = document.getElementById("reset");
    }

    displayCount(count){
        this.countElement.textContent = count;
    }q
    
    bindIncreament(handler){
        this.incBtn.addEventListener('click', handler);
    }

    bindDecreament(handler){
        this.decBtn.addEventListener('click', handler);
    }

    bindReset(handler){
        this.resetBtn.addEventListener('click', handler);
    }
}
class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;

        this.view.bindIncreament(this.handleInc);
        this.view.bindDecreament(this.handleDec);
        this.view.bindReset(this.handlereset);
    }

    handleInc = () => {
        this.model.increament();
        this.updateView();
    }

    handleDec = () => {
        this.model.decreament();
        this.updateView();
    }

    handlereset = () => {
        this.model.reset();
        this.updateView();
    }


    updateView(){
        this.view.displayCount(this.model.getCount());
    }
}
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
