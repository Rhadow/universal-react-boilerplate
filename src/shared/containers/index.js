import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AppView extends Component {
    render() {
        return (
            <div id="app-view">
                <Link to="/">User Selection</Link>
                <Link to="/pic">User Picture</Link>
                {this.props.children}
            </div>
        );
    }
}

AppView.propTypes = {
    children: PropTypes.object,
};

export default AppView;
