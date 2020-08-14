import React, { Component } from "react"
import { connect } from 'react-redux'
import {getDashboard} from '../../ActionCreators/dashboardAction'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };

    componentDidMount() {
        this.props.getDashboard(1)
    };

    handleShowDashboard = () => {
        debugger
        this.props.getDashboard(1)
    };

    render() {
        console.log(this.props.details)
        return (
            <div>
              dsfdsfs
              <button onClick={() => {
                this.handleShowDashboard()
              }}>Display dashboard</button>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        details: state.dashboardReducers.details
    };
};

const mapDispatchToProps = {
    getDashboard
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);