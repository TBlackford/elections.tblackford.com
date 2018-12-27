import * as R from 'ramda';
import { connect } from 'react-redux';
import CountryList from './CountryList';

const mapStateToProps = R.pick(['country']);

export default connect(mapStateToProps)(CountryList);
