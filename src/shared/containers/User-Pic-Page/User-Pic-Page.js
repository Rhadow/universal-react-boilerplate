import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../modules/profile';

class UserPicPage extends Component {
    componentDidMount() {
        this.props.fetchProfile();
    }
    static needs = [profileActions.fetchProfile]
    render() {
        const {
            imgUrl,
            followers,
            hasError,
        } = this.props;

        const errorHtml = hasError ? (<div>No Such User!!</div>) : undefined;

        return (
            <div className="user-pic-page">
                <div>Followers: {followers}</div>
                <img src={imgUrl} />
                {errorHtml}
            </div>
        );
    }
}

UserPicPage.propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    followers: PropTypes.number,
    hasError: PropTypes.bool,
    fetchProfile: PropTypes.func,
};

function mapStateToProps(state) {
    return Object.assign(
        {},
        state.profile
    );
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
        {},
        bindActionCreators(profileActions, dispatch)
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPicPage);
