// Allocation Methods
export const DHondt = require('./AllocationMethods/DHondt').default;
export const SainteLague = require('./AllocationMethods/SainteLague').default;
export const WinnerTakesAll = require('./AllocationMethods/WinnerTakesAll').default;

// Seating Layouts
export const HalfCircle = require('./SeatingLayouts/HalfCircle').default;
export const Westminster = require('./SeatingLayouts/Westminster').default;

// Voting Methods
export const FPP = require('./VotingMethods/FPP');
export const MMP = require('./VotingMethods/MMP');

// Main Function
//////////////////////////////////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParliamentSeats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parliament: this.props.parliament
        }
    }

    getSeatingLayout = () => {
        // Check if type is function
        if(typeof this.props.layout === "function") {
            return this.props.layout;
        }

        const layouts = {
            'westminster': <Westminster parliament={this.state.parliament} />,
            'half-circle': <HalfCircle parliament={this.state.parliament} seatCount={true} />,
        }

        return layouts[this.props.layout];
    }

    getAllocationMethod = () => {
        // Check if type is function
        if(typeof this.props.allocation === "function") {
            return this.props.allocation;
        }

        const allocations = {
            'sainte-lague' : SainteLague
        }

        return allocations[this.props.allocation];
    }

    render() {
        const Layout = this.getSeatingLayout();

        return (
            <div className="parliament-container">
                {Layout}
            </div>
        )
    }
}

ParliamentSeats.propTypes = {
    // Layout of parliament
    layout: PropTypes.oneOfType([
        PropTypes.oneOf(['westminster', 'half-circle']),
        PropTypes.func
    ]).isRequired,
    // Allocation method, e.g., D'Hondt, Saint-Langue, etc
    // Can be either a string or function
    allocation: PropTypes.oneOfType([
        PropTypes.oneOf(['dhondt', 'sainte-lague', 'hare']),
        PropTypes.func
    ]),
    // For votes
    results: PropTypes.object,
    // For known seating numbers,
    parliament: PropTypes.object
}

ParliamentSeats.defaultProps = {
    //TODO
    layout: 'half-circle',
    allocation: 'sainte-lague',
}//*/

export default ParliamentSeats;