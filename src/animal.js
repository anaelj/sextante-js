class Animal {
    constructor(name, yearsOld) {
      this.name = name;
      this.yearsOld = yearsOld - 1;

    }
}

class Canino extends Animal {
    constructor(name, yearsOld, barulho) {
      super(name, yearsOld);
      this.barulho = barulho + ' com eco';
    }
}

class Felino extends Animal {
    constructor(name, yearsOld, barulho) {
      super(name, yearsOld);
      this.barulho = barulho;
    }
}


const cachorro = new Canino ('Totó', 12, 'Latido');
const gato = new Felino ('Bichano', 10, 'Gato miando');

console.log(cachorro);
console.log(gato);