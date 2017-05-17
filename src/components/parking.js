import React from "react";
import ParkingFactory from '../utils/parking-factory'
import { randomizer } from '../utils/car-randomizer'

export default class Parking extends React.Component {
    constructor() {
        super(...arguments);

        this.carTypes = ['Sedan', 'Disabled', 'Truck'];

        this.state = {
            parking: []
        };
    }

    componentDidMount() {
        parkingFactory = new ParkingFactory();
    }

    generateUnits() {

    }

    render() {
        return (
            <div>
                Parking
                <button>Generate units</button>
                {
                    this.state.parking.map(item => {
                        return <div>item</div>
                    })
                }
            </div>
        );
    }
}