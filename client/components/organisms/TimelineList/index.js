import * as R from 'ramda';
import { connect } from 'react-redux';
import TimelineListContainer from './TimelineListContainer';

const mapStateToProps = R.pick(['country', 'elections']);

export default connect(mapStateToProps)(TimelineListContainer);
