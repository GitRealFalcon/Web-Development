// let obj = {
//     a : 1,
//     b : "naeem"
// }

// console.log(obj);

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jump : true
// }

// rabbit.__proto__ = animal;

class animal {
    constructor(name) {
        this.name = name;
        console.log('Object is created');

    }

    eats() {
        console.log('Kha rha hu');

    }
    jumps() {
        console.log('kood rha hu');

    }
}

class lion extends animal {
    constructor(name) {
        super(name);
        console.log('Object Created he is a lion..');
    }

    eats() {
        // super.eats();
        console.log('Kha rha hu roar');

    }

}

let a = new animal("Bunny");
console.log(a);

let l = new lion("Shera");
console.log(l);

class user {
    constructor(name) {
        this.name = name;
    };

    get name() {
        return this._name;
    }

    set name(value){
        if (value.length < 4) {
            console.log('Name is sort');
            return;
        }
        this._name = value;
    }
}

let u = new user("Naeem");
console.log(u);

u.name = "Kaseem";
console.log(u);

