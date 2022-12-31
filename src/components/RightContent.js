import React from 'react';
// import { Button, FormCheck } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const BCard = props => {
    return (
        <div style={{width:'30rem',border:'none',margin:'10px'}}>
            {/* <Card.Body> */}
            <div style={{display:'block',textAlign:'left',fontSize:'12px',fontWeight:'bold'}}>{props.ele.action}</div>
            <div style={{display:'block',textAlign:'left'}}>
                <div style={{display:'inline-block',paddingRight:'20px'}}>
                    <span style={{paddingRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cup" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9ZM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"/>
                        </svg>
                    </span>{props.ele.dish}
                </div>
                <div style={{display:'inline-block'}}>
                    <span style={{paddingRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </span>{props.ele.station}
                </div>
            </div>
            <div style={{display:'block',textAlign:'left'}}>
                <div style={{display:'inline-block',paddingRight:'20px'}}>
                    <span style={{paddingRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                    </span>{props.ele.duration}
                </div>
                <div style={{display:'inline-block'}}>
                    <span style={{paddingRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                        </svg>
                    </span>{props.ele.startTime}
                </div>
            </div>
            {/* </Card.Body> */}
        </div>
    );
}

class RightContent extends React.Component {
    
    state={count:1,prevB:false,nextB:false,notUpdatedByHeader:true,totalCount:1,kitchen:[],prevCardLen:-1,pageOnClick:false}

    buttonDis = () => {
        // console.log('Inside ButtonDis',this.state.kitchen,this.props.totalCount);
        console.log('Here');
        if(this.state.count===1 && this.state.count===this.state.totalCount){
            this.setState({prevB:true,nextB:true});
        }else{
            if(this.state.count===1){
                this.setState({prevB:true,nextB:false});
            }else if(this.state.count===this.state.totalCount){
                this.setState({nextB:true,prevB:false});
            }else{
                this.setState({nextB:false,prevB:false});
            }
        }
        // if(this.state.count===1 && this.state.count===this.state.totalCount){
        //     this.setState({prevB:true,nextB:true});
        // }else{
        //     if(this.state.count===1){
        //         this.setState({prevB:true,nextB:false});
        //     }else if(this.state.count===this.state.totalCount){
        //         this.setState({nextB:true,prevB:false});
        //     }else{
        //         this.setState({nextB:false,prevB:false});
        //     }
        // }
    }

    isEqual = (arr1,arr2) => {
        if(arr1.length !== arr2.length){
            return false;
        }else{
            for(let i=0;i<arr1.length;i++){
                let ind = arr2.indexOf(arr1[i]);
                if(i===-1){
                    return false;
                }else{
                    arr2.splice(ind,1);
                }
            }
        }
        if(arr2.length===0){
            return true;
        }else{
            return false;
        }
    }

    componentDidUpdate(){
        // if(this.state.count!==1){
        //     this.setState({count:1})
        // }
        // let arr1 = [...this.props.kitchen];
        // let arr2 = [...this.state.kitchen];
        // // if(arr1!==arr2){
        // //     //update state
        // // }
        // if(!this.isEqual(arr1,arr2) && this.state.notUpdatedByHeader){
        //     this.setState({kitchen:this.props.kitchen,totalCount:this.props.totalCount,
        //         preD:this.props.prevDish,preA:this.props.prevAction,preL:this.props.prevStation});
        // }
        // this.isEqual(arr1,arr2)
        // console.log(this.props);
    }

    componentDidMount(){
        this.buttonDis();
    }

    getCards = props => {
        let prop = {"action":"Action","duration":"Duration","station":"Station","dish":"Dish","startTime":"StartTime"}
        if(this.props.kitchen.length>0 || this.props.totalCount!==0){
            let allcards = [...this.props.kitchen];
            let cards = []
            let cards1 = []
            if(this.props.dish==='--any--' && this.props.action==='--any--' && this.props.station==='--any--' ){
                console.log('All None');
                cards1 = [...allcards]
            }else if(this.props.dish==='--any--' && this.props.action==='--any--'){
                console.log('2 None 1');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].station===this.props.station){
                        cards1.push(allcards[i])
                    }
                }
            }else if(this.props.dish==='--any--' && this.props.station==='--any--'){
                console.log('2 None 2');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].action===this.props.action){
                        cards1.push(allcards[i])
                    }
                }
            }else if(this.props.station==='--any--' && this.props.action==='--any--'){
                console.log('2 None 3');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].dish===this.props.dish){
                        cards1.push(allcards[i])
                    }
                }
            }else if(this.props.dish==='--any--'){
                console.log('1 None 1');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].station===this.props.station || allcards[i].action===this.props.action){
                        cards1.push(allcards[i])
                    }
                }
            }else if(this.props.action==='--any--'){
                console.log('1 None 2');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].station===this.props.station || allcards[i].dish===this.props.dish){
                        cards1.push(allcards[i])
                    }
                }
            }else if(this.props.station==='--any--'){
                console.log('1 None 3');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].dish===this.props.dish || allcards[i].action===this.props.action){
                        cards1.push(allcards[i])
                    }
                }
                console.log(cards1);
            }else{
                console.log('0 None');
                cards1 = []
                for(let i=0;i<allcards.length;i++){
                    if(allcards[i].dish===this.props.dish || allcards[i].action===this.props.action || allcards[i].station===this.props.station){
                        cards1.push(allcards[i])
                    }
                }
            }
            cards1 = Array.from(new Set(cards1));
            console.log(cards1);
            for(let i=4*(this.state.count-1);i<Math.min(4*this.state.count,cards1.length);i++){
                // cards.push(<BCard key={i} ele={this.state.kitchen[i]} />)
                cards.push(<BCard key={i} ele={cards1[i]} />)
            }
            if(cards.length<4){
                for(let i=0;i<4+1-cards.length;i++){
                    // cards.push(<BCard key={this.state.kitchen.length+i} ele={prop} />)
                    cards.push(<BCard key={cards1.length+i} ele={prop} />)
                }
            }
            // console.log(cards);
            if(this.state.totalCount!==Math.ceil(cards1.length/4)){
                this.setState({totalCount:Math.ceil(cards1.length/4)},()=>{this.buttonDis()});
            }
            if(cards1.length!==this.state.prevCardLen){
                this.buttonDis()
                this.setState({prevCardLen:cards1.length})
            }
            cards.push(<div style={{marginBottom:'20px',marginTop:'10px',fontSize:'12px'}}>
            <Button variant="light" disabled={this.state.prevB} onClick={()=>{this.setState({count:this.state.count-1},()=>{this.buttonDis()})}}>
                <div style={{display:'inline-block',marginRight:'20px',textAlign:'left'}}>
                    <span style={{marginRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </span>Previous
                </div>
            </Button>
            <div style={{display:'inline-block',width:'140px',textAlign:'center',fontSize:'12px'}}>
                {/* {this.state.count} of {this.props.totalCount} */}
                {/* {this.state.count} of {Math.ceil(this.getCards().length/4)} */}
                {this.state.count} of {this.state.totalCount}
            </div>
            <Button variant="light" disabled={this.state.nextB} onClick={()=>{this.setState({count:this.state.count+1},()=>{this.buttonDis()})}}>
                <div style={{display:'inline-block',marginLeft:'20px',textAlign:'right'}}>Next
                    <span style={{marginRight:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </div>
            </Button>
        </div>)
            return cards;
        }else{
            return (
                <div>
                    <div style={{}}><BCard ele={prop} /></div>
                    <div style={{}}><BCard ele={prop} /></div>
                    <div style={{}}><BCard ele={prop} /></div>
                    <div style={{}}><BCard ele={prop} /></div>
                </div>
            )
        }
    }

    render(){
        return (
            <div style={{fontSize:'10px'}}>
                {this.getCards()}
                {/* <RightContentFoot/> */}
                {/* <div style={{marginBottom:'20px',marginTop:'10px',fontSize:'12px'}}>
                    <Button variant="light" disabled={this.state.prevB} onClick={()=>{this.setState({count:this.state.count-1},()=>{this.buttonDis()})}}>
                        <div style={{display:'inline-block',marginRight:'20px',textAlign:'left'}}>
                            <span style={{marginRight:'5px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </span>Previous
                        </div>
                    </Button>
                    <div style={{display:'inline-block',width:'140px',textAlign:'center',fontSize:'12px'}}>
                        {this.state.count} of {this.state.totalCount}
                    </div>
                    <Button variant="light" disabled={this.state.nextB} onClick={()=>{this.setState({count:this.state.count+1},()=>{this.buttonDis()})}}>
                        <div style={{display:'inline-block',marginLeft:'20px',textAlign:'right'}}>Next
                            <span style={{marginRight:'5px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                        </div>
                    </Button>
                </div> */}
            </div>
        )
    }
    
}

export default RightContent;