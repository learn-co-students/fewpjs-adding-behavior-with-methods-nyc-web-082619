class Animal{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak() {
        if(this instanceof Cat){
            return this.name + ' says meow!'
        }else if(this instanceof Dog){
            return this.name + ' says woof!'
        }else if(this instanceof Bird){
            const maleResp =  "It's me! " + this.name + ", the parrot!"
            const femaleResp = this.name + " says squawk!"
            return this.sex === "male" ? maleResp : femaleResp
        }
    }
}

class Cat extends Animal{

}

class Dog extends Animal{

}

class Bird extends Animal{
 
}