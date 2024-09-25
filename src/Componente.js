import React, { Component } from 'react';

class Componente extends Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
    }

    componentDidMount() {
        console.log('Este componente se ha montado.');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Este componente se actualizó.');
    }

    componentWillUnmount() {
        console.log('Este componente se va a desmontar.');
    }

    incrementarContador = () => {
        this.setState((prevState) => ({
            contador: prevState.contador + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.incrementarContador}>Incrementar</button>
            </div>
        );
    }
}

export default Componente;

