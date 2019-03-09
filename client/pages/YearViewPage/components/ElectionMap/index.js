import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptGetMap } from '_thunks/map';
import ElectionMapContainer from './ElectionMapContainer';

//const mapStateToProps = R.pick(['country', 'election', 'map']);
const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
    getMap: (country, year, election) => dispatch(attemptGetMap(country, year, election)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElectionMapContainer);