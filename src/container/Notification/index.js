import React, { Component } from "react";
import { connect } from 'react-redux';
import { getNotification, editNotification, newNotification, removeNotification } from '../../ActionCreators/notificationAction'

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "sender": "abc",
        "receiver": "abc",
        "title": "hhfhj",
        "description": "hhfhj",
        "date_time": "2017-10-01 11:11:11",
        "isRead": 1,
        "noti_type": "demo"
    };

  };

  componentDidMount() {
    this.props.getNotification(1)
  };

  handleShowNotification = () => {
    // const obj = this.state;
    debugger
    this.props.getNotification(1)
  };

  handleUpdateNotification = () => {
    const obj = this.state;
    debugger
    this.props.editNotification(1, obj)
  };

  handleNewNotification = () => {
    const obj = this.state;
    debugger
    this.props.newNotification(obj)
  };

  handleDeleteNotification = () => {
    const obj = this.state;
    debugger
    this.props.removeNotification(obj)
  };

  render() {
    console.log(this.props.notification)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowNotification()
        }}>Display notification</button>
        <button onClick={() => {
          this.handleUpdateNotification()
        }}>Update notification</button>
        <button onClick={() => {
          this.handleNewNotification()
        }}>New notification</button>
        <button onClick={() => {
          this.handleDeleteNotification()
        }}>Delete notification</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    notification: state.notificationReducers.notification
  };
};

const mapDispatchToProps = {
  getNotification,
  editNotification,
  newNotification,
  removeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

