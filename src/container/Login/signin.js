import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userActions} from '../../ActionCreators/userActions';
import {history} from '../../history';
class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usrname: "demo2@demo.com",
            pswd: "123456",
            category: "select",
            submitted: false,
        };
    };

    onButtonClick = () => {
        history.push('/signup')
    };

    onhandleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    onhandleButton = (e) => {
        this.setState({submitted: true});
        const {usrname, pswd, category} = this.state;
        const user = {usrname, pswd, category}
        if (usrname && pswd) {
            this.props.Login_In(user);
        };
        // history.push('/userpage') 
    };

    render() {
        const {loggingIn} = this.props;
        const {usrname, pswd, category, submitted} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <h2>Sign <span>in</span></h2>
                        <form className="auth-form" action="#">
                            <div className={"input-wrp" + (submitted && !usrname ? 'has-error' : '')}>
                                <input className="textfield" type="text" name='usrname' value={usrname} onChange={this.onhandleChange}
                                placeholder="Username or email address *" />
                                {submitted && !usrname && <div className="help-block">Username is required</div>}
                            </div>

                            <div className={"input-wrp" + (submitted && !pswd ? 'has-error' : '')}>
                                <input className="textfield" type="text" name='pswd' value={pswd} onChange={this.onhandleChange}
                                placeholder="Password" />
                                {submitted && !pswd && <div className="help-block">Password is required</div>}
                            </div>

                            <div className="input-wrp">
                                <select onChange={this.onhandleChange} className="browser-default custom-select">
                                    <option value=""> Select your category </option>
                                    <option value={category}>Farmer</option>
                                    <option value={category}>Labour</option>
                                    <option value={category}>Vendor</option>
                                </select>
                                {submitted && !category && <div className="help-block">Atmost one user type must be selected</div>}
                            </div>

                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <label className="checkfield align-bottom">
                                        <input type="checkbox" checked="" />
                                        <i></i>
                                        Remember me
                    </label>
                                </div>

                                <div className="col-auto">
                                    <a className="link-forgot" href="#">Lost your password?</a>
                                </div>
                            </div>

                            <div className="d-table mt-8">
                                <div className="d-table-cell align-middle">
                                    <button className="custom-btn custom-btn--medium custom-btn--style-1" type="button" onClick={this.onhandleButton}>Login in</button>
                                    {loggingIn}
                                </div>

                                <div className="d-table-cell align-middle">
                                    <a><button className="link-to" href="#" onClick={this.onButtonClick}>Sign up</button></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

function mapState(state) {
    const {loggingIn} = state.userReducers;
    return {
        loggingIn
    };
};

const createActions = {
    Login_In: userActions.Login_In
};

const connectSignIn = connect(mapState, createActions)(SignIn);
export default connectSignIn;