import React from "react";
import ParkingFactory from '../utils/parking-factory'
import Randomizer from '../utils/car-randomizer'
import checkInArray from '../utils/check-in-array'

export default class Parking extends React.Component {
    constructor() {
        super(...arguments);

        this.parkingFactory = new ParkingFactory();
        this.randomizer = new Randomizer();
        this.checkInArray = checkInArray;
        this.carTypes = [null, 'Sedan', 'Disabled', 'Truck'];

        this.state = {
            parking: []
        };
    }

    componentDidMount() {
        /**
         * Create parking state
         */
        const state = this.parkingFactory.create({
            truck: {
                count: 10,
                available: ['sedan', 'disabled', 'truck']
            },
            sedan: {
                count: 15,
                available: ['sedan', 'disabled']
            },
            disabled: {
                count: 5,
                available: ['disabled']
            }
        });

        this.setState({parking: state});

        this.initOuterInterface();
    }

    /**
     * Init outer information console interface
     */
    initOuterInterface(){
        window.parking = {};

        window.parking.getFreeSlots = () => {
            let freeSlots = this.state.parking.filter(item => {
                return !item.busy;
            });

            console.log(`${freeSlots.length} свободных мест `, freeSlots);
        };

        window.parking.getBusyTruck = () => {
            let busyTrucks = this.state.parking.filter(item => {
                return item.type == 'truck' && item.busy;
            });

            console.log(`${busyTrucks.length} занятых мест для грузовиков`, busyTrucks);
        };

        window.parking.getParkingStatus = () => {
            window.parking.getFreeSlots();
            window.parking.getBusyTruck();
        }
    }

    generateUnits() {
        /**
         * Get random car
         */
        const parking = Array.from(this.state.parking);
        const length = this.randomizer.getValue(0, 30);

        /**
         * Set random car to parking places
         */
        for (let i = 0; i < length; i++) {
            const randomNumber = this.randomizer.getValue(0, 3);
            const unit = this.carTypes[randomNumber] ? this.carTypes[randomNumber] : false;

            if (!unit) {
                parking[i].busy = false;
                parking[i].who = 'void';

                continue;
            }

            for (let j = 0; j < length; j++) {
                if (this.checkInArray(unit, parking[i].available)) {
                    parking[i].busy = true;
                    parking[i].who = unit;
                }
            }
        }

        this.setState({parking: parking});
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