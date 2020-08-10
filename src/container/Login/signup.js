import React, { Component } from 'react';
import {userActions} from '../../ActionCreators/userActions';
import {connect} from 'react-redux';
import {history} from '../../history';

    class SignUp extends Component {
        constructor(props) {
            super(props)
            this.state = {
                user: {
                    flname: "",
                    mail: "",
                    pswd: "",
                    cnfrm: "",
                    category: "select",
                },
                submitted: false
            };
        };

        onHandleChange = (event) => {
            const {name, value} = event.target;
            // debugger
            const {user} = this.state;
            this.setState({
                user: {
                    ...user,
                    [name]: value
                }
            });
        };
    
        onHandleSubmit = (e) => {
            this.setState({submitted: true});
            const {user} = this.state;
            if (user.flname && user.mail && user.pswd && user.cnfrm && user.category) {
                this.props.Login_Up(user);
            };
        };

        onButtonClick = () => {
            history.push('/signin')
        };

        render() {
            const {registering} = this.props;
            const {user, submitted} = this.state
            return (
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
                                <h2>Sign <span>Up</span></h2>
                                <form className="auth-form" action="#" onChange={this.onHandleSubmit}>
                                    <div className={"input-wrp" + (submitted && !user.flname ? 'has-error' : '')}>
                                        <input className="textfield" type="text" name='flname' value={user.flname} onChange={this.onHandleChange} 
                                        placeholder="Full name *" />
                                        {submitted && !user.flname && 
                                        <div className="help-block">First name is required</div>}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.mail ? 'has-error' : '')}>
                                        <input className="textfield" type="text" name='mail' value={user.mail} onChange={this.onHandleChange}
                                        placeholder="Email *" />
                                        {submitted && !user.mail && 
                                        <div className="help-block">Email_Id is required</div>}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.pswd ? 'has-error' : '')}>
                                        <input className="textfield" type="text" name='pswd' value={user.pswd} onChange={this.onHandleChange} 
                                        placeholder="Password" />
                                        {submitted && !user.pswd && 
                                        <div className="help-block">Password is required</div>}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.cnfrm ? 'has-error' : '')}>
                                        <input className="textfield" type="text" name='cnfrm' value={user.cnfrm} onChange={this.onHandleChange}
                                        placeholder="Confirm password" />
                                        {submitted && !user.cnfrm && 
                                        <div className="help-block">Password Confirmation is must</div>}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.category ? 'has-error' : '')}>
                                        <select onChange={this.onHandleChange} className="browser-default custom-select">
                                            <option value=""> Select your category </option>
                                            <option value={user.category}>Farmer</option>
                                            <option value={user.category}>Labour</option>
                                            <option value={user.category}>Vendor</option>
                                        </select>
                                        {submitted && !user.category && 
                                        <div className="help-block">Atmost one user type must be selected</div>}
                                    </div>

                                    <div className="d-table mt-8">
                                        <div className="d-table-cell align-middle">
                                            <button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button" >Sign up</button>
                                            {registering}
                                        </div>

                                        <div className="d-table-cell align-middle">
                                            <a><button className="link-to" href="#" onClick={this.onButtonClick}>Sign in</button></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        };
    };

    function mapState (state) {
        const {registering} = state.userReducers;
        return {
            registering
        };
    };

    const createActions = {
        Login_Up: userActions.Login_Up
    };

const connectSignUp = connect(mapState, createActions)(SignUp);
export default connectSignUp;