import React, {Component} from "react";
import {connect} from 'react-redux';
import {showAttendance, editAttendance} from '../../ActionCreators/attendenceAction'

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      location: 'dsfsd',
      lat: '',
      long: '',
      date: "2020-07-16",
      type: "clock in",
      weather: "111"
    };

  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      console.log('error in Location')
    }
  }

  showPosition = (position) => {
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
  }

  componentDidMount() {
    this.getLocation()
    this.props.showAttendance(1)
    this.props.editAttendance(1)
  }

  handleDisplayAttendance = () => {
    const obj = this.state;
    debugger
    this.props.showAttendance(obj)
  }

  handleUpdateAttendance = () => {
    const obj = this.state;
    debugger
    this.props.editAttendance(obj)
  }

  render() {
    console.log(this.props.details)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleDisplayAttendance()
        }}>Display attendance</button>
        <button onClick={() => {
          this.handleUpdateAttendance()
        }}>Update attendance</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.attendanceReducers.details
  };
};

const mapDispatchToProps = {
  showAttendance,
  editAttendance
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);

