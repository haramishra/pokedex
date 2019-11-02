import React from 'react';

export default (props) => (
    <div className='status'>
        <Filler percentage={props.value} skillValue={props.skillType}/>
    </div>
);

const Filler = (props) => (
    <div className='filler' style={({width: `${props.percentage}%`})}>
        <span>{props.skillValue}</span>
    </div>
);