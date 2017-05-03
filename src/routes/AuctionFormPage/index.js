import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreateAuction } from '../../modules/auction/actions';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreateAuction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
