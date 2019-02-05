import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sum, round, pi, merge } from '../utils';

// Needed to calculate number of seats per rings
import Hare from '../AllocationMethods/Hare';

// Modified from https://github.com/juliuste/parliament-svg
class HalfCircle extends Component {
    constructor(props) {
        super(props);
    }

    coords(r, b) {
        return {
            x: round(r * Math.cos(b / r - pi)),
            y: round(r * Math.sin(b / r - pi))
        }
    }

    calculateSeatDistance(seatCount, numberOfRings, r) {
        const x = (pi * numberOfRings * r) / (seatCount - numberOfRings);
        const y = 1 + (pi * (numberOfRings - 1) * numberOfRings / 2) / (seatCount - numberOfRings);
    
        const a = x / y;
        return a;
    }

    score(m, n, r) {
        return Math.abs(this.calculateSeatDistance(m, n, r) * n / r - (5 / 7))
    }

    calculateNumberOfRings(seatCount, r) {
        let n = Math.floor(Math.log(seatCount) / Math.log(2)) || 1
        let distance = this.score(seatCount, n, r)
    
        let direction = 0
        if (this.score(seatCount, n + 1, r) < distance) direction = 1
        if (this.score(seatCount, n - 1, r) < distance && n > 1) direction = -1
    
        while (this.score(seatCount, n + direction, r) < distance && n > 0) {
            distance = this.score(seatCount, n + direction, r)
            n += direction
        }
        return n
    }

    nextRing(rings, ringProgress) {
        let progressQuota, tQuota
        for (let index in rings) {
            tQuota = round((ringProgress[index] || 0) / rings[index].length)
            if (!progressQuota || tQuota < progressQuota) progressQuota = tQuota
        }
        for (let index in rings) {
            tQuota = round((ringProgress[index] || 0) / rings[index].length)
            if (tQuota === progressQuota) return index
        }
    }

    generatePoints(parliament, r0) {
        const seatCount = sum(parliament, "seats");
        const numberOfRings = this.calculateNumberOfRings(seatCount, r0);
        const seatDistance = this.calculateSeatDistance(seatCount, numberOfRings, r0);
    
        // calculate ring radii
        let rings = []
        for (let i = 1; i <= numberOfRings; i++) {
            rings[i] = r0 - (i - 1) * seatDistance;
        }
    
        // calculate seats per ring
        // todo: float to int
        rings = Hare(rings, seatCount);
    
        const points = [];
        let r, a, point;

        // build seats
        // loop rings
        let ring;
        for (let i = 1; i <= numberOfRings; i++) {
            ring = [];
            // calculate ring-specific radius
            r = r0 - (i - 1) * seatDistance;
            // calculate ring-specific distance
            a = (pi * r) / ((rings[i] - 1) || 1);
    
            // loop points
            for (let j = 0; j <= rings[i] - 1; j++) {
                point = this.coords(r, j * a);
                point.r = 0.4 * seatDistance;
                ring.push(point);
            }
            points.push(ring);
        }
    
        // fill seats
        const ringProgress = Array(points.length).fill(0)
        for (let party in parliament) {
            for (let i = 0; i < parliament[party].seats; i++) {
                ring = this.nextRing(points, ringProgress)
                points[ring][ringProgress[ring]].fill = parliament[party].colour
                points[ring][ringProgress[ring]].party = party
                ringProgress[ring]++
            }
        }
    
        return merge(points)
    }

    makeText(seatCount, radius) {
        return (
            <text 
                key={""}
                x={0}
                y={0}
                textAnchor="middle"
                style={{
                    fontFamily: "Helvetica",
                    fontSize: 0.25 * radius + 'px'
                }}
                className="seatNumber"
            >
                {seatCount}
            </text>
        )
    }

    generate(parliament, seatCount) {
        if(typeof seatCount === 'boolean') {
            if(seatCount) {
                seatCount = sum(parliament, "seats");
            }            
        }
        
        const radius = 20;
        const points = this.generatePoints(parliament, radius);
        const a = points[0].r / 0.4;

        const elements = points.map(function(item, key) {
            return (
                <circle 
                    key={key}
                    cx={item.x}
                    cy={item.y}
                    r={item.r}
                    fill={item.fill}
                    className={item.party}
                />
            );
        });

        if (seatCount) {
            elements.push(this.makeText(seatCount, radius));
        }

        return(
            <svg 
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={[-radius - a / 2, -radius - a / 2, 2 * radius + a, radius + a].join(',')}
            >
                {elements}
            </svg>
        )
    }

    render() {
        const generate = this.generate(this.props.parliament, this.props.seatCount);

        return (
            <div className="half-circle-container">
                {generate}                
            </div>
        )
    }
}

HalfCircle.propTypes = {
    parliament: PropTypes.object.isRequired,
    seatCount: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
}

HalfCircle.defaultProps = {
    parliament: {},
}//*/

export default HalfCircle;