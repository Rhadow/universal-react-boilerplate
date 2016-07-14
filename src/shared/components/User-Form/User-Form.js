import React, { Component, PropTypes } from 'react';
// import './_User-Form.css';

class UserForm extends Component {
    _onClickHandler() {
        const newUser = this.refs.userName.value;
        if (newUser) {
            this.refs.userName.value = '';
            this.props.onSubmitHandler(newUser);
        }
    }
    render() {
        return (
            <div className="user-form">
                Please enter user name:
                <input ref="userName"/>
                <button onClick={::this._onClickHandler}>Submit</button>
            </div>
        );
    }
}

UserForm.propTypes = {
    onSubmitHandler: PropTypes.func,
};

UserForm.defaultProps = {
    onSubmitHandler: () => {},
};

export default UserForm;
