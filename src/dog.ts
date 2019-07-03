import { Animal } from './animal'

// no error
export interface Dog extends Animal {
    name: 'dog';
    color: 'yellow' | 'white' | 'black';
}