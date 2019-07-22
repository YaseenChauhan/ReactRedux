import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
   

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResults => (
                        <li onClick = {() => this.props.onDeleteResult(strResults.id)} key={strResults.id}>{strResults.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults : state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionType.ADD,value:5}),
        onSubCounter: () => dispatch({type: actionType.SUB,value:5}),
        onStoreResult : () => dispatch({type: actionType.STORE_RESULT}),
        onDeleteResult : (id) => dispatch({type: actionType.DELETE_RESULT,eleId : id})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);