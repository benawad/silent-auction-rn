import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Container } from 'native-base';

import Loading from './Loading';
import { requestAuth } from '../modules/user/actions';

export default function AuthRequired(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.props.requestAuth();
        }

        render() {
          return (
            <Container>
              {
                  Object.keys(this.props.user).length === 0
                  ? <Loading />
                  : <Component />
              }
            </Container>
          );
        }
    }

    const mapStateToProps = (state) => ({
      user: state.user,
    });

    const mapDispatchToProps = (dispatch) => bindActionCreators({ requestAuth }, dispatch);

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
