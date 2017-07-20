import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import {
  auctionCreated,
  auctionUpdated,
  auctionDeleted,
  requestAuctions,
  updateTime,
  requestBid,
  removeAuction,
} from '../../modules/auction/actions';
import { changeActiveSegment } from '../../modules/segment/actions';
import { changePick } from '../../modules/picker/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
    auctions: state.auctions,
    segment: state.segment,
    picker: state.picker,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      auctionCreated,
      auctionUpdated,
      auctionDeleted,
      removeAuction,
      requestAuctions,
      updateTime,
      changeActiveSegment,
      changePick,
      requestBid,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
