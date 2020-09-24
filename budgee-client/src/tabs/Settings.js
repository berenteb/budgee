import React, { Component } from 'react';

export class Settings extends Component {

    constructor(props){
        super(props);
        this.budgetRef = React.createRef();
        this.nameRef = React.createRef();
        this.editBudget = this.editBudget.bind(this);
        this.editName = this.editName.bind(this);
    }

    editBudget = function(){
        this.props.editBudget(this.budgetRef.current.value)
    }

    editName = function(){
        this.props.editName(this.nameRef.current.value)
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="topContent">
                    <h1>Settings</h1>
                    <div className="tabField">
                        <h2>Monthly budget</h2>
                        <input type="number" placeholder={this.props.state.monthly_budget} className="textField" ref={this.budgetRef}></input>
                        <input type="button" value="Update" className="button" onClick={this.editBudget}></input>
                        <input type="button" value="Delete" className="button deleteButton" onClick={this.props.deleteBudget}></input>
                    </div>
                    <div className="tabField">
                        <h2>Name</h2>
                        <input type="text" placeholder={this.props.state.name} className="textField" ref={this.nameRef}></input>
                        <input type="button" value="Update" className="button" onClick={this.editName}></input>
                        <input type="button" value="Delete" className="button deleteButton" onClick={this.props.deleteName}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings
