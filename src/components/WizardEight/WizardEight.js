import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {updateHistory} from '../../ducks/reducer.js';
import {connect} from 'react-redux';

class WizardEight extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    
                        <p>Have you had a bankruptcy or foreclosure in the past seven years? </p><br />
                    <div className="row">
                        <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={()=>this.props.updateHistory("Has never been in bankruptcy")}>No</button></Link>
                        <Link to="/wNine"><button value="Has had bankruptcy before" onClick={()=>this.props.updateHistory("Has had bankruptcy before")}>Bankruptcy</button></Link>
                        <Link to="/wNine"><button value="Has had a foreclosure before" onClick={()=>this.props.updateHistory("Has had a foreclosure before")}>Foreclosure</button></Link>
                        <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={()=>this.props.updateHistory("Has had both a foreclosure and a bankruptcy")}>Both</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapToState(state){
	return{
		history:state.history
	}
}

export default connect(mapToState, {updateHistory}) (WizardEight);