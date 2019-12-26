import React from 'react'
import { connect } from 'react-redux';

import { increment, decrement } from '../../reduxConfig/slices/counter';

const Redux = ({counter, increment, decrement}) => (
    <React.Fragment>
        <button onClick={() => increment()}>Increase</button>
        <button onClick={() => decrement()}>Decrease</button>
        <div>{JSON.stringify(counter)}</div>
    </React.Fragment>
);


const mapStateToProps = state => {
    console.log(state);
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = {increment, decrement};


export default connect(mapStateToProps, mapDispatchToProps)(Redux);