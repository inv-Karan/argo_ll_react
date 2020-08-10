import React, { Component } from "react";
import { connect } from 'react-redux';
import { getActivity, editActivity, newActivity, removeActivity } from '../../ActionCreators/activityAction'

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "title": "demo",
        "descr": "descr",
        "date": "0000-00-00",
        "time": "00:00:00",
        "activity_by": "1",
        "activity_to": "1",
        "isComplete": 0,
        "isReassigned": 0,
        "weather": "1",
        "remark": "none",
        "elevation": "1",
        "lat": "1",
        "longtitute": "1",
        "image": "Screenshot 2020-07-31 at 8.49.38 PM.png"
    };

  };

  componentDidMount() {
    this.props.getActivity(1)
  };

  handleShowActivity = () => {
    // const obj = this.state;
    debugger
    this.props.getActivity(1)
  };

  handleUpdateActivity = () => {
    const obj = this.state;
    debugger
    this.props.editActivity(1, obj)
  };

  handleNewActivity = () => {
    const obj = this.state;
    debugger
    this.props.newActivity(obj)
  };

  handleDeleteActivity = () => {
    const obj = this.state;
    debugger
    this.props.removeActivity(obj)
  };

  render() {
    console.log(this.props.activity)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowActivity()
        }}>Display activity</button>
        <button onClick={() => {
          this.handleUpdateActivity()
        }}>Update activity</button>
        <button onClick={() => {
          this.handleNewActivity()
        }}>New activity</button>
        <button onClick={() => {
          this.handleDeleteActivity()
        }}>Delete activity</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    activity: state.activityReducers.activity
  };
};

const mapDispatchToProps = {
  getActivity,
  editActivity,
  newActivity,
  removeActivity
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);

