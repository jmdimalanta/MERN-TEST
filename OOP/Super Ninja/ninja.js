class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = 0;
    }
    sayName(name){
        console.log(`Name: ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
    drinkSake(){
        this.health += 10;
    }

}
class Sensei extends Ninja{
    constructor(){
        super("Master Splinter", 200, 10, 10);
        this.wisdom = 10
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
