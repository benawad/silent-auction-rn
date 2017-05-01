import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import {
  auctionCreated,
  auctionUpdated,
  auctionDeleted,
  requestAuctions,
  updateTime,
} from '../../modules/auction/actions';
import {
  changeActiveSegment,
} from '../../modules/segment/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
    auctions: state.auctions,
    segment: state.segment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    auctionCreated,
    auctionUpdated,
    auctionDeleted,
    requestAuctions,
    updateTime,
    changeActiveSegment,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
