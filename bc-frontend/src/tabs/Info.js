import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="topContent textContent">
                    <h1>Page information and guidebook</h1>
                    <div className="tabField">
                        <h2>How this app works?</h2>
                        <p>This app calculates some helpful information from your budget and cash flow.</p>
                        <p>Reserve is calculated the following way:</p>
                        <p>(budget) / (days of month) * (day of current date) - (cash flow)</p>
                        <p>When your budget and name are not set, the app will automatically direct you to the settings page.</p>
                        <p>Expenses can be added on the second tab, write negative value for income!</p>
                        <p>The app works offline, just don't refresh the page!</p>
                    </div>
                    <div className="tabField">
                        <h2>Data handling</h2>
                        <p>This application does not send any information about its user. 
                            Local storage is used to remember the data, and it is only for user comfort. 
                            The following data is saved on your machine: name, budget and expenses. 
                            information is not sent to the server, the server only provides the application.
                            Every other information is calculated from these fields. 
                            You can delete saved data on the settings page.</p>
                    </div>
                    <div className="tabField">
                        <h2>Known issues</h2>
                        <ul>
                            <li>Safari doesn't save names with apostrophe correctly</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
