import { sum } from '../utils';

// Modified from https://github.com/juliuste/sainte-lague
function SainteLague(votes, seats) {
    const calculateSeats = (votes, divisor) => {
        const distribution = {};
        let seats = 0;
        for(let party in votes) {
            distribution[party] = Math.round(votes[party] / divisor);
            seats += distribution[party];
        }
        return { distribution, seats }
    }

    ////////////////////////////////////////////////////////////////////

    // initial settings for divisor finding
    const voteSum = sum(votes);
    console.log("voteSum,", voteSum);
    let low = voteSum / (seats - 2);
    let high = voteSum / (seats + 2);
    let divisor = voteSum / seats;
    //let divisor = voteSum / ((2 * seats) + 1); 
    //console.log("low,", low);
    //console.log("high,", high);
    console.log("divisor,", divisor);
    //console.log(test(voteSum, 20));

    // initial / trivial parliament
    let parliament = calculateSeats(votes, divisor);

    // find divisor
    while(parliament.seats != seats) {
        if(parliament.seats < seats) low = divisor;
        if(parliament.seats > seats) high = divisor;

        divisor = (low + high) / 2;
        parliament = calculateSeats(votes, divisor);
    }
    return parliament.distribution;
}

export default SainteLague;