class ParkingFactory{
    constructor(){}

    create(options){
        let arr = [];

        for(let i in options){
            let count = options[i].count;

            while (count){
                arr.push({
                    type: i,
                    busy: false,
                    who: 'void',
                    available: options[i].available
                })

                count--;
            }
        }

        return arr;
    }
}

export default ParkingFactory;