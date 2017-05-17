import React from "react";
import ParkingFactory from '../utils/parking-factory'
import Randomizer from '../utils/car-randomizer'

export default class Parking extends React.Component {
    constructor() {
        super(...arguments);

        this.parkingFactory = new ParkingFactory();
        this.randomizer = new Randomizer();
        this.carTypes = ['Sedan', 'Disabled', 'Truck'];

        this.state = {
            parking: this.parkingFactory.create({
                truck: 10,
                disables: 5,
                sedan: 15
            })
        };
    }

    generateUnits() {
        console.log('fjfgjfgj');

        let newParking = this.state.parking.map(item => {
            const randomNumber = this.randomizer.getValue(0, 3);
            const unit = randomNumber ? this.carTypes[randomNumber] : false;

            console.log(unit, item)
            if (unit) {
                item.busy = true;
                item.who = unit;
            } else {
                item.busy = false;
                item.who = 'void';
            }

        });

        this.setState({newParking: newParking});
    }

    render() {
        return (
            <div>
                Parking {this.name}
                <button onClick={this.generateUnits.bind(this)}>Generate units</button>
                {
                    this.state.parking.map(item => {
                        return <div key={Math.random()}>{`${item.type} - ${item.busy} --> ${item.who}`}</div>
                    })
                }
            </div>
        );
    }
}