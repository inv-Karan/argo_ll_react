import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAttendance, editAttendance, newAttendance, removeAttendance } from '../../ActionCreators/attendenceAction'

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "user_id": 1,
      "location": "dfgd",
      "lat": "123",
      "lng": "3242",
      "time": "09:14:36",
      "date": "2020-07-16",
      "type": "clock_in",
      "weather": "111"
    };

  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      console.log('error in Location')
    };
  };

  showPosition = (position) => {
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
  };

  componentDidMount() {
    this.getLocation()
    this.props.getAttendance(1)
  };

  handleShowAttendance = () => {
    // const obj = this.state;
    debugger
    this.props.getAttendance(1)
  };

  handleUpdateAttendance = () => {
    const obj = this.state;
    // obj.weather = Date.now().toString()
    debugger
    this.props.editAttendance(12, obj)
  };

  handleNewAttendance = () => {
    const obj = this.state;
    debugger
    this.props.newAttendance(obj)
  };

  handleDeleteAttendance = () => {
    const obj = this.state;
    debugger
    this.props.removeAttendance(obj)
  };

  render() {
    console.log(this.props.details)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowAttendance()
        }}>Display attendance</button>
        <button onClick={() => {
          this.handleUpdateAttendance()
        }}>Update attendance</button>
        <button onClick={() => {
          this.handleNewAttendance()
        }}>New attendance</button>
        <button onClick={() => {
          this.handleDeleteAttendance()
        }}>Delete attendance</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    details: state.attendanceReducers.details
  };
};

const mapDispatchToProps = {
  getAttendance,
  editAttendance,
  newAttendance,
  removeAttendance
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);