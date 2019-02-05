import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PartyListPV from './PartyListPV';

import FPP from './FPP';

// Allocation method:
// threshold: 
// number of total seats

// MMP is a mixed voting method
function MMP(results, allocation, threshold, totalSeats) {
    removeSuccessfulCandidates = (list, fpp) => {
        for(electorate in fpp) {
            // Candidate that won
            var candidate = fpp[electorate].candidate;
            var party = fpp[electorate].party;

            
            list[party].candidates.splice(list[party].candidates.indexOf(candidate), 1);
        }
        return list;
    }

    prepareListForSL = (list) => {
        var newList = {}



        return newList;
    }

    ////////////////////////////////////////////////////////////////////

    var parliament = {};

    // Get FPP results first
    var fpp = FPP(results.electorates);

    // Remove candidates that have won an electorate
    var list = results.list;
    list = removeSuccessfulCandidates(list, fpp);

    // Then Party list results
    var plpv = PartyListPV()

    return parliament;
}

/*results = {
    electorates: {
        otago: [
            {
                party: "National",
                candidate: "a",
                votes: 21378
            }
        ],
    },
    list: {
        national: {
            votes: 123,
            candidates: [
                "a"
            ]
        }
    }
}

MMP.propTypes = {
    results: PropTypes.shape({
        electorates: PropTypes.arrayOf(PropTypes.shape({
            party: PropTypes.string,
            candidate: PropTypes.string,
            votes: PropTypes.number,
        })),
        list: PropTypes.arrayOf(PropTypes.shape({
            party: PropTypes.string,
            candidate: PropTypes.string,
            votes: PropTypes.number,
        })),
    }),
    allocation: PropTypes.oneOfType([
        PropTypes.oneOf(['dhondt', 'sainte-lague', 'hare']),
        PropTypes.func
    ]),
    threshold: PropTypes.number, // This will be a percentage
    totalSeats: PropTypes.number,
}//*/

export default MMP;