import React, { Component } from 'react';
import {userActions} from '../../ActionCreators/userActions';
import {connect} from 'react-redux';
import {history} from '../../history';

    class SignUp extends Component {
        constructor(props) {
            super(props)
            this.state = {
                user: {
                    UserType: "",
                    Name: "",
                    Email: "",
                    Mobile: "",
                    AlternateMobile: "",
                    Password: "",
                    Address: "",
                    DateOfBirth: "",
                    Gender: ""
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
    
        onHandleSubmit = () => {
            this.setState({submitted: true});
            const {user} = this.state;
            if (user.UserType && 
                user.Name && 
                user.Email && 
                user.Mobile || 
                user.AlternateMobile && 
                user.Password && 
                user.Address && 
                user.DateOfBirth && 
                user.Gender) 
                {
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

                                    <div className={"input-wrp" + (submitted && !user.UserType)}>
                                        <select onChange={this.onHandleChange} className="browser-default custom-select">
                                            <option value=""> Select the type of User </option>
                                            <option value={user.UserType}>Visitor</option>
                                            <option value={user.UserType}>Manager</option>
                                            <option value={user.UserType}>Farmer</option>
                                            <option value={user.UserType}>Vendor</option>
                                            <option value={user.UserType}>Employee</option>
                                            <option value={user.UserType}>simple User</option>
                                            <option value={user.UserType}>CEO/HR</option>
                                        </select>
                                        {/* {!submitted || !user.UserType && 
                                        <div className="help-block">Atmost one user type must be selected</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.name)}>
                                        <input className="textfield" type="text" name='name' value={user.name} onChange={this.onHandleChange}
                                        placeholder="Name" />
                                        {/* {!submitted && !user.name === '' && 
                                        <div className="help-block">Name is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.Email)}>
                                        <input className="textfield" type="text" name='Email' value={user.Email} onChange={this.onHandleChange} 
                                        placeholder="Email ID" />
                                        {/* {!submitted && !user.Email === '' && 
                                        <div className="help-block">Email is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.Mobile)}>
                                        <input className="textfield" type="text" name='Mobile' value={user.Mobile} onChange={this.onHandleChange}
                                        placeholder="Mobile Number" />
                                        {/* {!submitted && !user.Mobile === '' && 
                                        <div className="help-block">Mobile Number is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.AlternateMobile)}>
                                        <input className="textfield" type="text" name='AlternateMobile' value={user.AlternateMobile} onChange={this.onHandleChange}
                                        placeholder="alternate Mobile Number (optional)" />
                                        {/* {!submitted && !user.AlternateMobile === '' && 
                                        <div className="help-block">Alternate mobile Number is required (optional)</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.Password)}>
                                        <input className="textfield" type="text" name='Password' value={user.Password} onChange={this.onHandleChange}
                                        placeholder="Password" />
                                        {/* {!submitted && !user.Password === '' &&
                                        <div className="help-block">Password is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.Address)}>
                                        <input className="textfield" type="text" name='Address' value={user.Address} onChange={this.onHandleChange}
                                        placeholder="Address" />
                                        {/* {!submitted && !user.Address === '' && 
                                        <div className="help-block">Address is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.DateOfBirth)}>
                                        <input className="textfield" type="date" name='dateOfBirth' required pattern= "[0-9]{2}-[0-9]{2}-[0-9]{4}" value={user.DateOfBirth} onChange={this.onHandleChange}
                                        placeholder="Date Of Birth" />
                                        {/* {!submitted && !user.DateOfBirth === '' && 
                                        <div className="help-block">Date Of Birth is required</div>} */}
                                    </div>

                                    <div className={"input-wrp" + (submitted && !user.Gender)}>
                                        <select onChange={this.onHandleChange} className="browser-default custom-select">
                                            <option value=""> Select the Gender type </option>
                                            <option value={user.UserType}>Male</option>
                                            <option value={user.UserType}>Female</option>
                                            <option value={user.UserType}>Other</option>
                                        </select>
                                        {/* {!submitted || !user.Gender && 
                                        <div className="help-block">Atmost one Gender type must be selected</div>} */}
                                    </div>

                                    <div className="d-table mt-8">
                                        <div className="d-table-cell align-middle">
                                            <button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button" >SIGN UP</button>
                                            {registering}
                                        </div>

                                        <div className="d-table-cell align-middle">
                                            <a><button className="link-to" href="#" onClick={this.onButtonClick}>LOGIN</button></a>
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