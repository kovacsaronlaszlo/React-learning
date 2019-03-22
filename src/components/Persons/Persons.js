import React, { Component }  from 'react';

import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('Persons constructor: ' + props);
      }
    
      componentWillMount() {
        console.log('Persons componentWillMount()');
      }
    
      componentDidMount() {
        console.log('Persons componentDidMount()');
      }

      componentWillReceiveProps(nextProps) {
        console.log('persons componentWillReceiveProps nextprops: ' + nextProps);
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('persons componentWillReceiveProps nextprops: ' + nextProps + ' nextState: ' + nextState);
        return nextProps.persons !== this.props.persons;
      }

      componentWillUpdate(nextProps, nextState) {
        console.log('persons componentWillUpdate nextprops: ' + nextProps + ' nextState: ' + nextState);
      }

      componentDidUpdate() {
        console.log('persons componentDidUpdate');
      }

    render() {
        console.log('Persons render()')
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )} />
        });
    }
} 


export default Persons;