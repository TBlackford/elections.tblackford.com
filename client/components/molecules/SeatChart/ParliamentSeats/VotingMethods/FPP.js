import WinnerTakesAll from '../AllocationMethods/WinnerTakesAll';

/*

votes: {
    "electorate": [
        {
            party: "",
            candidate: "",
            votes: ""
        }
    ]
}

votes: {
    Otago: [
        {
            party: "",
            candidate: "",
            votes: ""
        }
    ]
}

*/

// 
function FPP(votes) {
    var parliament = {};

    // Loop over electorates
    for(item in votes) {
        var highest = votes[item][0];

        // Loop over candidates
        for(var i = 0; i < votes[item].length; i++) {
			if(votes[item][i].votes > highest.votes)
				highest = votes[item][i];
        }
		// Add candidate to parliament
        parliament[item] = highest;
    };

    return parliament;
}

export default FPP;