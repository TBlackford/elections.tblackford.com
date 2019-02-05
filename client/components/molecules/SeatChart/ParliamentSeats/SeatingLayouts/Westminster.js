import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sortBy, sumBy, toArray, reverse, round } from 'lodash';

import { pi } from '../utils';

class Westminster extends Component {
    constructor(props) {
        super(props);

        this.state = {
            proportion: 1.1 * pi,
            middleSpace: 2/3,
            radius: 0.42
        }
    }

    countSeatsInSide = (side) => sumBy(toArray(side), (p) => p.seats)

    calculateWingRows = (parliament) => {
        const averageWingSize = sumBy([parliament.left, parliament.right], this.countSeatsInSide) / 2;
        const rows = Math.ceil(Math.sqrt(averageWingSize / this.state.proportion));
        console.log("rows,", rows);
        return rows;
    }

    calculateHeight = (wingRows) => 2*wingRows + this.state.middleSpace * 2 + 1 // this should - in theory - use 'headColumns' instead of the +1, but that shouldn't really matter for usual parliament sizes

    calculateCrossRows = (cross, wingRows) => {
        const crossSeats = this.countSeatsInSide(cross)
        const maxColumns = Math.max([1, Math.floor(this.calculateHeight(wingRows)-0.75)])
        let currentRows = 1
        while(Math.ceil(crossSeats/currentRows) > maxColumns) currentRows++
        return currentRows
    }

    calculateHeadColumns = (head, maxWingColumns) => {
        const headSeats = this.countSeatsInSide(head)
        const maxRows = Math.floor(maxWingColumns * 0.9)
        let currentColumns = 1
        while(Math.ceil(headSeats/currentColumns) > maxRows) currentColumns++
        return currentColumns
    }

    calculateMissingDimension = (side, knownDimension) => {
        const seats = this.countSeatsInSide(side)
        return Math.ceil(seats / knownDimension)
    }

    generateHeadPoints = (headSeats, headRows, headColumns, startingPoint) => {
        const points = []
        for(let row = 0; row < headRows; row++){
            for(let column = 0; column < headColumns; column++){
                let modifier
                if(row === headRows - 1) modifier = ((headColumns - (headSeats % headColumns)) % headColumns) / 2 // center last row if necessary
                else modifier = 0
                points.push([
                    startingPoint[0] + row,
                    startingPoint[1] + column + modifier
                ])
                if(points.length === headSeats) return reverse(points)
            }
        }
    }

    generateWingPoints = (wingSeats, wingRows, wingColumns, startingPoint, yDirection) => {
        const points = []
        for(let column = 0; column < wingColumns; column++){
            for(let row = 0; row < wingRows; row++){
                points.push([
                    startingPoint[0] + column,
                    startingPoint[1] + (row * yDirection)
                ])
                if(points.length === wingSeats) return points
            }
        }
    }

    generateCrossPoints = (crossSeats, crossRows, crossColumns, startingPoint) => {
        const points = []
        for(let row = 0; row < crossRows; row++){
            for(let column = 0; column < crossColumns; column++){
                let modifier
                if(row === crossRows - 1) modifier = ((crossRows - (crossSeats % crossRows)) % crossRows) / 2
                else modifier = 0
                points.push([
                    startingPoint[0] + row,
                    startingPoint[1] + column + modifier
                ])
                if(points.length === crossSeats) return sortBy(points, (p) => p[1])
            }
        }
    }

    fillPoint = (point, party, colour) => ({
        x: round(point[0]),
        y: round(point[1]),
        r: this.state.radius,
        fill: colour,
        class: party
    })

    fillSidePoints = (sidePoints, side) => {
        const filledPoints = []
        let start = 0
        for(let party in side){
            for(let i = 0; i < side[party].seats; i++){
                filledPoints.push(this.fillPoint(sidePoints[start+i], party, side[party].colour))
            }
            start += side[party].seats
        }
        return filledPoints
    }

    generateChart = (parliament) => {

        const wingRows = this.calculateWingRows(parliament)
        const leftWingColumns = this.calculateMissingDimension(parliament.left, wingRows)
        const rightWingColumns = this.calculateMissingDimension(parliament.right, wingRows)

        //console.log(wingRows, leftWingColumns, rightWingColumns)

        const crossRows = this.calculateCrossRows(parliament.crossBench, wingRows)
        const crossColumns = this.calculateMissingDimension(parliament.crossBench, crossRows)

        //console.log(crossRows, crossColumns)

        const headColumns = this.calculateHeadColumns(parliament.headBench, Math.max([leftWingColumns, rightWingColumns]))
        const headRows = this.calculateMissingDimension(parliament.headBench, headColumns)

        //console.log(headColumns, headRows)

        const headSeats = this.countSeatsInSide(parliament.headBench)
        const leftWingSeats = this.countSeatsInSide(parliament.left)
        const rightWingSeats = this.countSeatsInSide(parliament.right)
        const crossSeats = this.countSeatsInSide(parliament.crossBench)

        //console.log(headSeats, leftWingSeats, rightWingSeats, crossSeats)

        const headStart = [0, -(headColumns-1)/2]
        const leftWingStart = [1, headStart[1]-this.state.middleSpace-1]
        const rightWingStart = [1, headStart[1]+(headColumns-1)+this.state.middleSpace+1]
        const crossStart = [1 + Math.max(leftWingColumns, rightWingColumns) + 1, -(crossColumns - 1) / 2]

        //console.log(headStart, leftWingStart, rightWingStart, crossStart)

        const padding = 0.5;

        const left = headStart[0] - 0.5 - padding;
        const top = leftWingStart[1] - (wingRows - 1) - 0.5 - padding;
        const right = crossStart[0] + (crossRows - 1) + 0.5 + padding;
        const bottom = rightWingStart[1] + (wingRows-1) + 0.5 + padding;
        const width = right - left;
        const height = bottom - top;

        //console.log(left, top, right, bottom, width, height)

        const headPoints = this.generateHeadPoints(headSeats, headRows, headColumns, headStart)
        const leftWingPoints = this.generateWingPoints(leftWingSeats, wingRows, leftWingColumns, leftWingStart, -1)
        const rightWingPoints = this.generateWingPoints(rightWingSeats, wingRows, rightWingColumns, rightWingStart, 1)
        const crossPoints = this.generateCrossPoints(crossSeats, crossRows, crossColumns, crossStart)

        const points = []

        points.push(...this.fillSidePoints(headPoints, parliament.headBench))
        points.push(...this.fillSidePoints(leftWingPoints, parliament.left))
        points.push(...this.fillSidePoints(rightWingPoints, parliament.right))
        points.push(...this.fillSidePoints(crossPoints, parliament.crossBench))

        return {points, dimensions: {
            left, top, right, bottom, width, height
        }}
    }

    generate = (parliament) => {
        const chart = this.generateChart(parliament)
        const elements = chart.points.map(function(item, key) {
            return (
                <circle 
                    key={key}
                    cx={item.x}
                    cy={item.y}
                    r={item.r}
                    fill={item.fill}
                    className={item.party}
                />
            )
        });

        return(
            <svg 
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={[chart.dimensions.left, chart.dimensions.top, chart.dimensions.width, chart.dimensions.height].join(',')}
            >
                {elements}
            </svg>
        )
    }

    render() {
        const generate = this.generate(this.props.parliament);

        return (
            <div className="">
                {generate}
            </div>
        )
    }
}

Westminster.propTypes = {
    parliament: PropTypes.object.isRequired,
    seatCount: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
}

Westminster.defaultProps = {
    parliament: {},
}//*/

export default Westminster;