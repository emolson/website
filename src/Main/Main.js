import React from 'react'
import { connect } from 'react-redux';

import { increment, decrement } from '../reduxConfig/slices/counter';

const Main = ({counter}) => (
    <React.Fragment>
        <button onKeyPress={increment}>Increase</button>
        <button onKeyPress={decrement}>Decrease</button>
        <div>{JSON.stringify(counter)}</div>
    </React.Fragment>
);


const mapStateToProps = state => {
    console.log(state);
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = {increment, decrement};


export default connect(mapStateToProps, mapDispatchToProps)(Main);