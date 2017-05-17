import React from "react";

export default class Parking extends React.Component {
    constructor(){
        super(...arguments);

        this.state = {
            parking: []
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
               Parking
            </div>
        );
    }
}