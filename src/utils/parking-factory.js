class ParkingFactory{
    constructor(){}

    create(options){
        let arr = [];

        for(let i in options){
            let count = options[i];

            while (count){
                arr.push({
                    type: i,
                    busy: false,
                    who: 'void'
                })

                count--;
            }
        }

        return arr;
    }
}

export default ParkingFactory;