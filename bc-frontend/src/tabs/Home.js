import React, { Component } from 'react';
//import Down from './img/down.png'

export class Home extends Component {

    state = {
        reserve: 0,
        average: 0,
        style: { color: "#000000" }
    }

    setStyle = function () {
        var style = { color: "#000000" }
        if (this.state.reserve < 0) {
            style.color = "#900d0d"
        } else if (this.state.reserve > 0) {
            style.color = "#009A00"
        }
        this.setState({ style: style })
    }

    static getDerivedStateFromProps(nextProps, prevState){
        var d = new Date();
        var daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d.getMonth() === 1) {
            if (d.getFullYear() % 4 === 0) {
                return 29;
            }
        }
        var reserve = nextProps.state.monthly_budget / daysOfMonths[d.getMonth()] * d.getDate() - nextProps.state.expenses;
        var average = nextProps.state.expenses / d.getDate();
        var averageSplit = average.toString().split(".");
        var result = {
            reserve: reserve,
            average: averageSplit[0]
        }
        return result;
     }

    render() {
        return (
            <div className="mainContainer">
                <div className="topContent">
                    <div className="tabField">
                        <h1>Hello, {this.props.state.name}!</h1>
                    </div>
                    <div className="tabField">
                        <h2>Reserve</h2>
                        <h2 style={{ color: this.state.reserve < 0 ? "#900d0d" : this.state.reserve === 0 ? "#000000" : "#009A00" }}>{this.state.reserve.toString().split(".")[0]} Ft</h2>
                    </div>
                    <div className="tabField">
                        <h2>Average</h2>
                        <h2 style={{ color: this.state.reserve < 0 ? "#900d0d" : this.state.reserve === 0 ? "#000000" : "#009A00" }}>{this.state.average} Ft</h2>
                    </div>
                    {/*<div className="tabField">
                        <img height="50px" src={Down} alt="Scroll for more!"></img>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default Home
