import React, { Component } from 'react';
import './App.css';
import Nav from './navbar/Nav.js';
import Tabs from './tabs/Tabs.js';

class App extends Component {

  state = {
    tab: 0,
    expenses: 0
  }

  changeTab = function (tab) {
    if(this.state.name&&this.state.monthly_budget>0){
      this.setState({tab:tab});
    }else{
      alert("Some fields are not set!")
    }
  }

  addRecord = function (amount) {
    var new_expenses = this.state.expenses + amount;
    localStorage.expenses = new_expenses;
    localStorage.lastMonth = new Date().getMonth();
    this.setState({
      expenses: new_expenses
    })
  }

  editBudget = function (new_budget) {
    localStorage.monthly_budget = new_budget;
    this.setState({
      monthly_budget: parseInt(new_budget)
    })
  }

  editName = function (new_name) {
    localStorage.name = new_name
    this.setState({
      name: new_name
    })
  }

  deleteName = function(){
    localStorage.removeItem('name');
    window.location.reload();
  }

  deleteBudget = function(){
    localStorage.removeItem('monthly_budget');
    window.location.reload();
  }

  deleteExpenses = function(){
    localStorage.removeItem('expenses');
    window.location.reload();
  }

  initData = new Promise((res,rej)=>{
    var name = localStorage.name;
    var monthly_budget = parseInt(localStorage.monthly_budget);
    var expenses = parseInt(localStorage.expenses)||0;
    var currentMonth = new Date().getMonth()
    if(currentMonth >localStorage.lastMonth){
      expenses = 0;
      localStorage.expenses = 0;
      localStorage.lastMonth = currentMonth;
    }
    var result = {
      name: name,
      monthly_budget: monthly_budget,
      expenses: expenses
    };
    if(name&&monthly_budget>0){
      res(result);
    }else{
      rej(result);
    }
  })

  componentDidMount() {
    this.initData.then((res)=>{
      this.setState(res);
    }).catch(result=>{
      result.tab = 2;
      this.setState(result);
    })
  }

  render() {
    return (
      <div className="App">
        <Tabs state={this.state} addRecord={this.addRecord.bind(this)} editBudget={this.editBudget.bind(this)} editName={this.editName.bind(this)} deleteExpenses={this.deleteExpenses.bind(this)} deleteName={this.deleteName.bind(this)} deleteBudget={this.deleteBudget.bind(this)}/>
        <Nav tab={this.state.tab} changeTab={this.changeTab.bind(this)} />
      </div>
    );
  }
}

export default App;
