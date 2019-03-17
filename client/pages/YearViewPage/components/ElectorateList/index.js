import R from '_utils/ramda';
import { connect } from 'react-redux';
import ElectorateListContainer from './ElectorateListContainer';

const mapStateToProps = R.pick(['electorates']);

export default connect(mapStateToProps)(ElectorateListContainer);
