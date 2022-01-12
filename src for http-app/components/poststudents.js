import React, { Component } from 'react';
import axios from 'axios';

class Poststd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:0,
            name:'',
            city:''
         }
    }

    handleChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=event=>{
        // event.preventDefault()
        axios.post('http://localhost:8000/saveStd',this.state)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        }
        )
    }
    
    render() { 

        const{id,name,city}=this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='Id'>ID</label>
                    <input type='text' name='id' id='Id' onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor='na'>Name</label>
                    <input type='text' name='name' id='na'  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor='ci'>City</label>
                    <input type='text' name='city' id='ci'  onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type='submit' value='register'></input>
                    <input type='reset' value='clear'></input>
                </div>
                </form>
            </div>
          );
    }
}
 
export default Poststd;
