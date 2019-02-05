import SainteLague from '../AllocationMethods/SainteLague';

function PartyListPV(votes, seats, allocation) {
    allocation = allocation || SainteLague;
    return allocation(votes, seats);
}

export default PartyListPV;