import React from 'react';

class Contador extends React.Component {
    constructor (props) {
        super(props) ;
        this.state= { contador:0};
    };
    incrementar = ()  => {
        this.setState ({ contador: this.state.contador + 1}) ;
    } ;
    render () {
        return (
            <div>
        <h1> Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar} >Incrementar </button> 
        </div>
        ) ;
    }
}
export default Contador;  