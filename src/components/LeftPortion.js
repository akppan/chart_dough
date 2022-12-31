import React from 'react';
import LeftHeader from './LeftHeader';
import LeftContent from './LeftContent';

const LeftPart = props => {
    return (
        <div style={{display:'inline-block'}}>
            <LeftHeader duration={props.duration} orders={props.orders} average={props.average}/>
            <LeftContent dish={props.dish} location={props.location} action={props.action}/>
        </div>
    )
}

export default LeftPart;