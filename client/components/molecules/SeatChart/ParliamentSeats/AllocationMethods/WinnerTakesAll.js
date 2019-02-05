import { max } from '../utils';

function WinnerTakesAll(electorate) {
    return max(electorate.votes)
}

export default WinnerTakesAll;