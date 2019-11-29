import { Component } from 'react'

const createContext = (initValue) => {
    const context = {
        value: initValue,
        Provider: null,
        Consumer: null,
    }


    class Provider extends Component {
        getSnapshotBeforeUpdate(props) {
            Provider.__context.value = props.value
        }

        render() {
            const { value, children } = this.props
            Provider.__context.value = value
            return children
        }
    }
    Provider.__context = context
    context.Provider = Provider


    const Consumer = props => props.children(Consumer.__context.value);
    Consumer.__context = context
    context.Consumer = Consumer

    return context
}

export default createContext;