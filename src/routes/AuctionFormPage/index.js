import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestUpdateAuction, requestCreateAuction } from '../../modules/auction/actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestCreateAuction,
      requestUpdateAuction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
