import React, { Component } from 'react';
//import Down from './img/down.png'

export class Home extends Component {

    state = {
        reserve: 0,
        average: 0,
        style: { color: "#000000" }
    }

    getMonthDays = function (month) {
        var daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === 1) {
            var d = new Date();
            if (d.getFullYear() % 4 === 0) {
                return 29;
            }
        }
        return daysOfMonths[month];
    }

    calculateReserve = function () {
        var d = new Date();
        var reserve = this.props.state.monthly_budget / this.getMonthDays(d.getMonth()) * d.getDate() - this.props.state.expenses;
        this.setState({
            reserve: reserve
        })

    }

    calculateAverage = function () {
        var day = new Date().getDate();
        var average = this.props.state.expenses / day;
        var averageSplit = average.toString().split(".");
        this.setState({
            average: averageSplit[0]
        })
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

    componentWillReceiveProps() {
        this.calculateReserve();
        this.calculateAverage();
        this.setStyle();
    }

    componentDidMount(){
        this.calculateReserve();
        this.calculateAverage();
        this.setStyle();
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
