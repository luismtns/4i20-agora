import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

class HomeContainer extends React.Component {

  render() {
    return (
      <div className="HomeContainer">
        HomeContainer
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

HomeContainer.propTypes = {};

HomeContainer.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
