import React, { Component } from 'react';
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            subject: ''
        }
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    handleSub = (event) => {
        this.setState({
            subject: event.target.value
        });
    }
    handleSubmit = () => {
        alert(`name : ${this.state.username} email : ${this.state.email} subject : ${this.state.subject}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {/* <h2>{this.state.username}</h2> */}
                        <label htmlFor="">username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername} />
                    </div>
                    <div>
                        {/* <h2>{this.state.username}</h2> */}
                        <label htmlFor="">email ID</label>
                        <input type="text" value={this.state.email} onChange={this.handleEmail} />
                    </div>
                    <div>
                        {/* <h2>{this.state.username}</h2> */}
                        <label htmlFor="">subjects</label>
                        <select value={this.state.subject} onChange={this.handleSub}>
                            <option value="Java">Java</option>
                            <option value="python">Python</option>
                            <option value="go">Go</option>
                            <option value="dot">.net</option>
                        </select>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
export default FormComponent;