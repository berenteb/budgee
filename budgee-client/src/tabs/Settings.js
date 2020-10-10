import React, { Component } from 'react';

export class Settings extends Component {

    constructor(props) {
        super(props);
        this.budgetRef = React.createRef();
        this.nameRef = React.createRef();
        this.editBudget = this.editBudget.bind(this);
        this.editName = this.editName.bind(this);
    }

    editBudget = function () {
        var inputIsCorrect = true;
        //var str = this.budgetRef.current.value;
        //Check input
        if (inputIsCorrect) {
            this.props.editBudget(this.budgetRef.current.value);
            this.budgetRef.current.value = "";
        } else {
            alert("Input format is incorrect!");
        }
    }



    editName = function () {
        this.props.editName(this.nameRef.current.value);
        this.nameRef.current.value = "";
    }

    budgetFieldKeyDown = function (e) {
        if (e.keyCode === 13) this.editBudget();
    }

    nameFieldKeyDown = function (e) {
        var key = e.keyCode;
        if (key === 13) this.editName();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="section fillScreen">
                    <h1>Settings</h1>
                    <div className="tabField">
                        <h2>Monthly budget</h2>
                        <div className="inline-flex center">
                            <input type="number" placeholder={this.props.state.monthly_budget} className="textField" ref={this.budgetRef} onKeyDown={this.budgetFieldKeyDown.bind(this)}></input>
                            <div className="inline-flex center">
                                <input type="button" value="Update" className="button" onClick={this.editBudget}></input>
                                <input type="button" value="Delete" className="button deleteButton" onClick={this.props.deleteBudget}></input>
                            </div>
                        </div>
                    </div>
                    <div className="tabField">
                        <h2>Name</h2>
                        <div className="inline-flex center">
                            <input type="text" placeholder={this.props.state.name} className="textField" ref={this.nameRef} onKeyDown={this.nameFieldKeyDown.bind(this)}></input>
                            <div className="inline-flex center">
                                <input type="button" value="Update" className="button" onClick={this.editName}></input>
                                <input type="button" value="Delete" className="button deleteButton" onClick={this.props.deleteName}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings
