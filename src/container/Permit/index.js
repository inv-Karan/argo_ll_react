import React, { Component } from "react";
import { connect } from 'react-redux';
import { getPermit, editPermit, newPermit, removePermit } from '../../ActionCreators/permitAction'

class Permit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "user_id": "2",
        "photopath": "1596539562Screenshot 2020-07-31 at 8.49.38 PM.png",
        "isApproved": "1",
        "name": "first"
    };

  };

  componentDidMount() {
    this.props.getPermit(1)
  };

  handleShowPermit = () => {
    // const obj = this.state;
    debugger
    this.props.getPermit(1)
  };

  handleUpdatePermit = () => {
    const obj = this.state;
    debugger
    this.props.editPermit(1, obj)
  };

  handleNewPermit = () => {
    const obj = this.state;
    debugger
    this.props.newPermit(obj)
  };

  handleDeletePermit = () => {
    const obj = this.state;
    debugger
    this.props.removePermit(obj)
  };

  render() {
    console.log(this.props.permit)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowPermit()
        }}>Display permit</button>
        <button onClick={() => {
          this.handleUpdatePermit()
        }}>Update permit</button>
        <button onClick={() => {
          this.handleNewPermit()
        }}>New permit</button>
        <button onClick={() => {
          this.handleDeletePermit()
        }}>Delete permit</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    permit: state.permitReducers.permit
  };
};

const mapDispatchToProps = {
  getPermit,
  editPermit,
  newPermit,
  removePermit
};

export default connect(mapStateToProps, mapDispatchToProps)(Permit);

