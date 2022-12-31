import './App.css';
import React from 'react';
import LeftPart from './components/LeftPortion';
import RightPart from './components/RightPortion';
import db from './config/firebase';
import { onValue,ref } from 'firebase/database';

class App extends React.Component {

  state = {kitchen:[],dishType:{},locationType:{},actionType:{},totalDur:1,totalOrd:1,aver:1}

  async componentDidMount(){
    //Fetch the required data from the database and populate state.
    //dishType
    //locationType
    //actionType
    try{
      const foodRef = ref(db);
      onValue(foodRef,(food)=>{
        let allFood = [];
        let dType={};
        let aType={};
        let lType={};
        let dur=0;
        let avg = 0;
        let count = 0;
        food.forEach(f => {
          let data = f.val();
          allFood.push(data);
          dur += data["duration"];
          count += 1;
          avg = dur/count;
          if(dType[data["dish"]]===undefined || dType[data["dish"]]==='NaN'){
            dType[data["dish"]] = 1
          }else{
            dType[data["dish"]] = dType[data["dish"]] + 1
            // console.log('Here',data["dish"],dType[data["dish"]])
          }
          if(lType[data["station"]]===undefined || lType[data["station"]]==='NaN'){
            lType[data["station"]] = 1
          }else{
            lType[data["station"]] = lType[data["station"]] + 1
          }
          if(aType[data["action"]]===undefined || aType[data["action"]]==='NaN'){
            aType[data["action"]] = 1
          }else{
            aType[data["action"]] = aType[data["action"]] + 1
          }
          this.setState({dishType:dType});
          this.setState({locationType:lType});
          this.setState({actionType:aType});
          this.setState({kitchen:allFood});
          this.setState({totalDur:dur})
          this.setState({totalOrd:count})
          this.setState({aver:avg})
        });
      })
    }catch(err){
      console.log(err);
    }
    
  }

  render(){
    return (
      <div>
        <div style={{display:'inline-block',width:'700px',padding:'10px',margin:'5px'}}><LeftPart dish={this.state.dishType} location={this.state.locationType} action={this.state.actionType} duration={this.state.totalDur} orders={this.state.totalOrd} average={this.state.aver} /></div>
        {/* <div style={{display:'inline-block',width:'500px',padding:'10px',margin:'5px'}}><LeftPart /></div> */}
        <div style={{display:'inline-block',width:'500px',padding:'10px',margin:'5px'}}><RightPart dish={this.state.dishType} location={this.state.locationType} action={this.state.actionType} kitchen={this.state.kitchen} /></div>
      </div>
    );
  }
}

export default App;
