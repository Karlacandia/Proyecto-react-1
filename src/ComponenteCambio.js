import React, { Component } from 'react';
import Contador from './Contador';

class ComponenteCambio extends Component {
constructor(props) {
    super(props);
    this.state= {contador:0};
}
componentDidMount () {
    console.log ('Este componente se ha montado');
}

componentDidUpdate (prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
        console.log ('Este componente se ha cambiado  a: ${this.state.contador}');
    }
}
componentWillUnmount()  {
    console.log ('Este componente se va a desmontar');
}
incremetarContador = () => {
    this.setState ((prevState) => ({
        contador: prevState.contador + 1
    } ) );
};
render() {
    return (
        <div>
            <h1>Contador: {this.state.contador}</h1>
            <button onClick={this.incremetarContador}>Incrementar</button>
        </div>
    );
}
}
export default ComponenteCambio;
