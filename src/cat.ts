// error: @typescript-eslint/no-unused-vars
import { Animal } from './animal'

declare global {
    namespace AllAnimals {
        interface Cat extends Animal {
            name: 'cat';
            color: 'yellow' | 'white' | 'black';
        }
    }
}
