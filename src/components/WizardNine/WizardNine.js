import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {updateOne, updateTwo, updateThree} from '../../ducks/reducer.js';
import {connect} from 'react-redux';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e)=>this.props.updateOne(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e)=>this.props.updateTwo(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e)=>this.props.updateThree(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapToState(state){
	return{
		addressOne:state.addressOne,
		addressTwo:state.addressTwo,
		addressThree:state.addressThree
	}
}

export default connect(mapToState, {updateOne, updateTwo, updateThree}) (WizardNine);