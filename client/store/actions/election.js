export const SET_ELECTION = 'SET_ELECTION';

export const setElection = ({ _id, year, electionType, votingSystem, country, map, totals }) => ({
    type: SET_ELECTION,
    _id, year, electionType, votingSystem, country, map, totals
});