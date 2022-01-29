class Ninja {
    constructor() {
        this.name = "Hayabusa"
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(name){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
const hayabusa = new Ninja();
hayabusa.sayName();
hayabusa.showStats();
hayabusa.drinkSake();
hayabusa.showStats();