let firstName: string = 'Edvardas';
let age: number = 12;
let isMale: boolean = true;
let hobbies: any = 'string';
hobbies = {}
const names: string[] = ['Petras', 'Jonas', 'Ona'];
names.push('Leis ideti tik stringa')

const numbers: number[]= [1, 2, 3, 4, 5];
numbers.unshift(1) // Leis ideti tik skaiciu

//Tuples

let person: [string, number, boolean] =['Edvardas', 18, true]

//Union
// Galima naudoti abu
let id: string | number = 'Edvardas';
id = 5;

function add(x: number, y: number):number {
    return x + y;
}
add(4,0)

function addNumber(x: number, y:number):void {
    console.log(x+y);
}

let user: User= {
    id: 1,
    firstName: 'Jonas',
    lastName: 'Jonaitis'
}
interface User {
    id:number, 
    firstName: string,
    readonly lastName: string; //Negalime pakeist.
    age?:number;    //KLaustukas reiskia kad nebutinai turime naudoti sita parametra.
}