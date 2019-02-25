export const SET_ELECTION = 'SET_ELECTION';

export const setElection = ({ year, electionType, votingSystem, country, map, totals }) => ({
    type: SET_ELECTION,
    year, electionType, votingSystem, country, map, totals
});