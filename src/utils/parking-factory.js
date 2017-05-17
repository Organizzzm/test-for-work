export class ParkingFactory{
    constructor(){}

    create(options){
        return {
            type: options.type,
            busy: false,
            who: null
        }
    }
}