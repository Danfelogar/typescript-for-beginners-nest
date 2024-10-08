class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream() {
        console.log(`I don't want to SCREAM!!!`);
    }

    speak() {
        console.log(`I don't want to SPEAK`);
    }
}

const MyDecorator = () => {
    return(target: Function) =>{
       return NewPokemon
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();