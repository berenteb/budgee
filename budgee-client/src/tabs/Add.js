import React, { Component } from 'react';

export class Add extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.addRecord = this.addRecord.bind(this)
      }

    addRecord = function(){
        this.props.addRecord(parseInt(this.inputRef.current.value))
        this.inputRef.current.value = "";
    }

    addKeyDown = function (e) {
        if (e.keyCode === 13) this.addRecord();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="topContent">
                    <h1>Add record</h1>
                    <p>Tip: Write negative value for income!</p>
                    <div className="tabField">
                        <input type="number" placeholder="Type amount here!" className="textField" ref={this.inputRef} onKeyDown={this.addKeyDown.bind(this)}></input>
                        <div className="inline-flex center">
                            <input type="button" className="button" value="Add!" onClick={this.addRecord}></input>
                            <input type="button" className="button deleteButton" value="Delete expenses" onClick={this.props.deleteExpenses}></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add

