import React, { Component } from 'react';
import axios from 'axios';
class Student extends Component {
    constructor(props) {
    super(props);
    this.state = {
        std:[],
        errors:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/Students').
            then(res=>{
            console.log(res.data);
            this.setState({
            std:res.data,
        })
    console.log(res);
    }).
    catch(error=>{
    //console.log(error);
    this.setState({
    errors:'Unable to fetch the information'
        })
    })



    }
//execute nly once throughout life cycle of program
    render() {
        const{std,errors}=this.state;
        return ( <div>
        <h1>Student details
        { std.length ? std.map(stds=><div key={stds.id}>{stds.id} | {stds.name} | {stds.city}</div>):null}
        {errors ? <h2>{errors}</h2>:null}



        {/* //stds->entire record is pointed by stds */}
        </h1>
        </div> );
    }
}



export default Student ;