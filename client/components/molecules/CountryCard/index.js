import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptUpdateCountry, attemptDeleteCountry } from '_thunks/country';
import CountryCardContainer from './CountryCardContainer';

const mapStateToProps = R.pick([]);

export default connect(mapStateToProps)(CountryCardContainer);
