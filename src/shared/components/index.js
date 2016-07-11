import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AppView extends Component {
    render() {
        return (
            <div id="app-view">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                {this.props.children}
            </div>
        );
    }
}

AppView.propTypes = {
    children: PropTypes.object,
};

export default AppView;
