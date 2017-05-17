export default class Randomizer {
    constructor() {
    }

    getValue(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
}