import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import {
  auctionCreated,
  requestAuctions,
  updateTime,
} from '../../modules/auction/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
    auctions: state.auctions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    auctionCreated,
    requestAuctions,
    updateTime,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
