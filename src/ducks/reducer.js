const initialState = {
	loanType: 'Home Purchase',
	propertyType: 'Single Family Home',
	city: '',
	propToBeUsedOn: '',
	found: "false",
	realEstateAgent: "false",
	cost: 0,
	downPayment: 0,
	credit: '',
	history: '',
	addressOne: '',
	addressTwo: '',
	addressThree: '',
	firstName: '',
	lastName: '',
	email: ''
}


const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';

const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ONE = 'UPDATE_ONE';
const UPDATE_TWO = 'UPDATE_TWO';
const UPDATE_THREE = 'UPDATE_THREE';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';


export function updateLoanType(loanType){
	return{
		type:UPDATE_LOAN_TYPE,
		payload:loanType
	}
}

export function updatePropertyType(property){
	return{
		type:UPDATE_PROPERTY_TYPE,
		payload:property
	}
}

export function updateCity(city){
	return{
		type:UPDATE_CITY,
		payload:city
	}
}

export function updateProp(prop){
	return{
		type:UPDATE_PROP,
		payload:prop
	}
}

export function updateFound(found){
	return{
		type:UPDATE_FOUND,
		payload:found
	}
}

export function updateAgent(agent){
	return{
		type:UPDATE_AGENT,
		payload:agent
	}
}

export function updateCost(val){
	return{
		type:UPDATE_COST,
		payload:val
	}
}

export function updateDownPayment(val){
	return{
		type:UPDATE_DOWNPAYMENT,
		payload:val
	}
}

export function updateCredit(val){
	return{
		type:UPDATE_CREDIT,
		payload:val
	}
}

export function updateHistory(val){
	return{
		type:UPDATE_HISTORY,
		payload:val
	}
}

export function updateOne(val){
	return{
		type:UPDATE_ONE,
		payload:val
	}
}

export function updateTwo(val){
	return{
		type:UPDATE_TWO,
		payload:val
	}
}

export function updateThree(val){
	return{
		type:UPDATE_THREE,
		payload:val
	}
}

export function updateFirstName(val){
	return{
		type:UPDATE_FIRSTNAME,
		payload:val
	}
}

export function updateLastName(val){
	return{
		type:UPDATE_LASTNAME,
		payload:val
	}
}

export function updateEmail(val){
	return{
		type:UPDATE_EMAIL,
		payload:val
	}
}

function reducer(state=initialState, action){
	switch(action.type){
		case UPDATE_LOAN_TYPE:
			return{
				...state,
				loanType:action.payload
			}
		case UPDATE_PROPERTY_TYPE:
			return{
				...state,
				propertyType:action.payload
			}
		case UPDATE_CITY:
			return{
				...state,
				city:action.payload
			}
		case UPDATE_PROP:
			return{
				...state,
				propToBeUsedOn:action.payload
			}
		case UPDATE_FOUND:
			return{
				...state,
				found:action.payload
			}
		case UPDATE_AGENT:
			return{
				...state,
				realEstateAgent: ""+action.payload
			}
		case UPDATE_COST:
			return{
				...state,
				cost:action.payload
			}
		case UPDATE_DOWNPAYMENT:
			return{
				...state,
				downPayment:action.payload
			}
		case UPDATE_CREDIT:
			return{
				...state,
				credit:action.payload
			}
		case UPDATE_HISTORY:
			return{
				...state,
				history:action.payload
			}
		case UPDATE_ONE:
			return{
				...state,
				addressOne:action.payload
			}
		case UPDATE_TWO:
			return{
				...state,
				addressTwo:action.payload
			}
		case UPDATE_THREE:
			return{
				...state,
				addressThree:action.payload
			}
		case UPDATE_FIRSTNAME:
			return{
				...state,
				firstName:action.payload
			}
		case UPDATE_LASTNAME:
			return{
				...state,
				lastName:action.payload
			}
		case UPDATE_EMAIL:
			return{
				...state,
				email:action.payload
			}
		
		default:
		return state;
	}
}

export default reducer;