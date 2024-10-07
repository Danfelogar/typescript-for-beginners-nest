import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interfaces';

export class Pokemon {

    // public id: number;
    // public name: string;

    // constructor(id: number, name: string) {
    //     this.id = id;
    //     this.name = name;
    //     console.log('Constructor llamado');
    // }
    // el get es usado para obtener un valor
    get imgUrl(): string {
        //this en este caso apunta a la instancia de la clase es decir el constructor
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
    }

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    //methods no son mas que funciones dentro de una clase que tienen acceso a las propiedades de la clase
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    //en los methods sino se pone public o private por defecto es public que quiere decir que puede ser llamado por fuera de la clase
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves():Promise<Move[]>{
        const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0].move.name);

        return data.moves
    }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 5;
// charmander.name = 'Charmander 2';

// console.log({charmander}, charmander.scream(), charmander.speak());

console.log(charmander.getMoves());