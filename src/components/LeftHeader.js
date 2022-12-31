import React from 'react';

const LeftHeader = props => {
    return (
        <div style={{position:'relative',display:'inline-block',padding:'20px',textAlign:'center'}}>
            <div style={{position:'relative',display:'inline-block',width:'200px'}}>
            <div style={{}}>{props.duration}</div>
            <div style={{}}>Duration</div>
            </div>
            <div style={{position:'relative',display:'inline-block',width:'200px'}}>
            <div style={{}}>{props.average}</div>
            <div style={{}}>Average</div>
            </div>
            <div style={{position:'relative',display:'inline-block',width:'200px'}}>
            <div style={{}}>{props.orders}</div>
            <div style={{}}>Count</div>
            </div>
        </div>
    )
}

export default LeftHeader;