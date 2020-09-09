import React, { Component } from 'react'
import Home from './Home'
import Add from './Add';
import Settings from './Settings';

export class Tabs extends Component {
    render() {
        switch (this.props.state.tab) {
            case 0:
                return <Home state={this.props.state}/>;
            case 1:
                return <Add addRecord={this.props.addRecord}/>;
            case 2:
                return <Settings state={this.props.state} editBudget={this.props.editBudget} editName={this.props.editName}/>;
            default:
                return <Home />
        }
    }
}

export default Tabs
