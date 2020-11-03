import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userActions} from '../../ActionCreators/userActions';
import {history} from '../../history';
class SignIn extends Component {
    constructor(props) {
        super(props)

        // for demo, Email: demo2@demo.com and password: 123456
        this.state = {
            Email: "",
            Password: "",
            submitted: false
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
        const { Email, Password } = this.state;
        const user = { Email, Password }
        if (Email && Password) {
            this.props.Login_In(user);
        };
        // history.push('/userpage') 
    };

    render() {
        const {loggingIn} = this.props;
        const {Email, Password, submitted} = this.state;
        return (
            <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
                        <h2>Sign <span>in</span></h2>
                        <form className="auth-form" action="#">
                            <div className={"input-wrp" + (submitted && !Email ? 'has-error' : '')}>
                                <input className="textfield" type="text" name='Email' value={Email} onChange={this.onhandleChange}
                                placeholder="abc@example.com" />
                                {submitted && !Email && <div className="help-block">Email is required</div>}
                            </div>

                            <div className={"input-wrp" + (submitted && !Password ? 'has-error' : '')}>
                                <input className="textfield" type="text" name='Password' value={Password} onChange={this.onhandleChange}
                                placeholder="Password" />
                                {submitted && !Password && <div className="help-block">Password is required</div>}
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
                                    <a className="link-forgot" href="#"> forgot password?</a>
                                </div>
                            </div>

                            <div className="d-table mt-8">
                                <div className="d-table-cell align-middle">
                                    <button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button" onClick={this.onhandleButton}>LOGIN</button>
                                    {loggingIn}
                                </div>

                                <div className="d-table-cell align-middle">
                                    <a><button className="link-to" href="#" onClick={this.onButtonClick}>SIGN UP</button></a>
                                </div>
                            </div>
                        </form>
                    </div>
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