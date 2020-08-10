import React, { Component } from "react";
import { connect } from 'react-redux';
import { getQuery, editQuery, newQuery, removeQuery } from '../../ActionCreators/queryAction'

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "sender": "p@gmail.com",
      "message": "abc",
      "photo": "Screenshot 2020-07-31 at 8.49.38 PM.png",
      "rec": "1",
      "isRead": "0",
      "date": "2020-08-10 00:00:00",
      "isViewed": "0"
    };

  };

  componentDidMount() {
    this.props.getQuery(10)
  };

  handleShowQuery = () => {
    // const obj = this.state;
    debugger
    this.props.getQuery(10)
  };

  handleUpdateQuery = () => {
    const obj = this.state;
    debugger
    this.props.editQuery(10, obj)
  };

  handleNewQuery = () => {
    const obj = this.state;
    debugger
    this.props.newQuery(obj)
  };

  handleDeleteQuery = () => {
    const obj = this.state;
    debugger
    this.props.removeQuery(obj)
  };

  render() {
    console.log(this.props.queries)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowQuery()
        }}>Display query</button>
        <button onClick={() => {
          this.handleUpdateQuery()
        }}>Update query</button>
        <button onClick={() => {
          this.handleNewQuery()
        }}>New query</button>
        <button onClick={() => {
          this.handleDeleteQuery()
        }}>Delete query</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    queries: state.queryReducers.queries
  };
};

const mapDispatchToProps = {
  getQuery,
  editQuery,
  newQuery,
  removeQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);

