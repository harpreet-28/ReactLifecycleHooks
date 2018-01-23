import React, {Component} from 'react';
import Person from './Person/Person.js';



export default class Persons extends Component{
	constructor(props) {
		console.log('[Persons.js] inside constructor()', props)
        super(props)
    }
    componentWillMount() {
        console.log('componentWillMount() executing in Persons.js file')
    }
    componentDidMount() {
        console.log('componentDidMount() executing in Persons.js file')

    }

    componentWillReceiveProps(nextProps){
    	console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', nextProps)

    }
    shouldComponentUpdate(nextProps, nextState){
    	console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState)
    	
    	//below is immutable approach for updation rather than returning either true or false.
    	return nextProps.persons !== this.props.persons;
    }
    componentWillUpdate(nextProps, nextState){
    	console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState)

    }
    componentDidUpdate(){
    	console.log('[UPDATE Persons.js] inside componentDidUpdate()')

    }
    	render(){
    		console.log('[Persons.js] inside render()')
		return this.props.persons.map((person, index) => {
	        return (
	        <Person 
	        click={ () => this.props.clicked(index)}
	        name={person.name} 
	        age={person.age} 
	        key={person.id} 
	        changed={(event)=> this.props.changed(event, person.id)} />
	        )})
	    }
}
