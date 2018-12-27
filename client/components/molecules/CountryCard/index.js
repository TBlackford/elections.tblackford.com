import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptUpdateCountry, attemptDeleteCountry } from '_thunks/country';
import CountryCardContainer from './CountryCardContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
    updateCountry: ( id, name, iso_code, continent, flag_url ) => dispatch(attemptUpdateCountry( id, name, iso_code, continent, flag_url )),
    deleteCountry: id => dispatch(attemptDeleteCountry(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryCardContainer);
