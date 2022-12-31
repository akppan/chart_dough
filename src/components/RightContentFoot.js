import React from 'react';
import { Button } from 'react-bootstrap';

const RightContentFoot = props => {
    return (
        <div style={{marginBottom:'20px',marginTop:'10px',fontSize:'12px'}}>
            <Button variant="light"><div style={{display:'inline-block',marginRight:'20px',textAlign:'left'}}><span style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></span>Previous</div></Button>
            <div style={{display:'inline-block',width:'140px',textAlign:'center'}}>Center</div>
            <Button variant="light"><div style={{display:'inline-block',marginLeft:'20px',textAlign:'right'}}>Next<span style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></span></div></Button>
        </div>
    )
}

export default RightContentFoot;