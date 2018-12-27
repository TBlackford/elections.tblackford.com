import R from '_utils/ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AppPageContainer from './AppPageContainer';

const mapDispatchToProps = dispatch => ({
    //pushToLogin: () => dispatch(push('/login')),
});

export default connect(mapDispatchToProps)(AppPageContainer);
