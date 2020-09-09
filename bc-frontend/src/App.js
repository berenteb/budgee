import React, { Component } from 'react';
import './App.css';
import Nav from './navbar/Nav.js';
import Tabs from './tabs/Tabs.js';

class App extends Component {

  state = {
    tab: 0//,
  //  name: "Bálint",
  //  monthly_budget: 100000,
  //  expenses: 12312
  }

createCookie = function(name,value,days) {
  var expires = ""
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)===' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

eraseCookie = function(name) {
	this.createCookie(name,"",-1);
}

  updateCookie = function(){
    //this.eraseCookie('name');
    //this.eraseCookie('monthly_budget');
    //this.eraseCookie('expenses');
   
    
    
  }

  changeTab = function (tab) {
    this.setState({
      "tab": tab
    });
  }

  addRecord = function(amount){
    this.eraseCookie('expenses');
    var new_expenses = this.state.expenses + amount;
    this.createCookie('expenses',new_expenses);
    this.setState({
      expenses: new_expenses
    })
  }

  editBudget = function(new_budget){
    this.eraseCookie('monthly_budget');
    this.createCookie('monthly_budget',new_budget);
    this.setState({
      monthly_budget: parseInt(new_budget)
    })
  }

  editName = function(new_name){
    this.eraseCookie('name');
    this.createCookie('name',new_name);
    this.setState({
      name: new_name
    })
  }

  componentDidMount(){
      this.setState({
        name: this.readCookie('name')||"Unknown",
        monthly_budget: parseInt(this.readCookie('monthly_budget'))||0,
        expenses: parseInt(this.readCookie('expenses'))||0
      })
  }

  render() {
    return (
      <div className="App">
        <Tabs state={this.state} addRecord={this.addRecord.bind(this)} editBudget={this.editBudget.bind(this)} editName={this.editName.bind(this)}/>
        <Nav tab={this.state.tab} changeTab={this.changeTab.bind(this)} />
      </div>
    );
  }
}

export default App;
