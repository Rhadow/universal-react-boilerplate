import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserForm from '../../components/User-Form/User-Form';
import * as profileActions from '../../modules/profile';

class UserSelectPage extends Component {
    render() {
        const { name, changeUser } = this.props;
        return (
            <div>
                Current User: {name}
                <UserForm
                    onSubmitHandler={changeUser}/>
            </div>
        );
    }
}

UserSelectPage.propTypes = {
    name: PropTypes.string,
    changeUser: PropTypes.func,
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
)(UserSelectPage);
