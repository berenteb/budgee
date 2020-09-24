import React, { Component } from 'react';
import './Nav.css';
import HomeImg from './img/home.png';
import PlusImg from './img/plus.png';
import SettingsImg from './img/settings.png';
import InfoImg from './img/info.png';

export class Nav extends Component {

    render() {
        var homeStyle = {};
        var addStyle = {};
        var settingsStyle = {};
        var infoStyle = {};

        switch (this.props.tab) {
            case 0:
                homeStyle = { backgroundColor: "#319BBD" };
                break;
            case 1:
                addStyle = { backgroundColor: "#319BBD" };
                break;
            case 2:
                settingsStyle = { backgroundColor: "#319BBD" };
                break;
            case 3:
                infoStyle = { backgroundColor: "#319BBD" };
                break;
            default:
                break;
        }

        return (
            <div className="navBar">
                <div className="navContainer">
                    <div className="navItem" id="homeButton" style={homeStyle} onClick={() => { this.props.changeTab(0); }}>
                        <img src={HomeImg} alt="Home"></img>
                    </div>
                    <div className="navItem" id="addButton" style={addStyle} onClick={() => { this.props.changeTab(1); }}>
                        <img src={PlusImg} alt="Add"></img>
                    </div>
                    <div className="navItem" id="settingsButton" style={settingsStyle} onClick={() => { this.props.changeTab(2); }}>
                        <img src={SettingsImg} alt="Settings"></img>
                    </div>
                    <div className="navItem" id="infoButton" style={infoStyle} onClick={() => { this.props.changeTab(3); }}>
                        <img src={InfoImg} alt="Information"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
