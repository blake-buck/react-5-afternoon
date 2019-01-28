import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {updateAgent} from '../../ducks/reducer.js';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={()=>this.props.updateAgent(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={()=>this.props.updateAgent(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapToState(state){
	return{
		realEstateAgent:state.realEstateAgent
	}
}

export default connect(mapToState, {updateAgent}) (WizardFive);