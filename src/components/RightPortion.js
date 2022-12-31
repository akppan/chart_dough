import React from 'react';
import RightHeader from './RightHeader';
import RightContent from './RightContent';

class RightPart extends React.Component{

    state={kitchen:[],locationFilter:'--any--',actionFilter:'--any--',dishFilter:'--any--',preS:'--any--',preA:'--any--',preD:'--any--'}
    // state={kitchen:[],stationFilter:'Any',actionFilter:'Any',dishFilter:'Any',locations:null,actions:null,dishes:null}

    componentDidMount(){
        this.setState({kitchen:this.props.kitchen});
        // this.setState({locations:this.sOptions(),actions:,dishes:})
    }

    // static getDerivedStateFromProps(nextProps,prevState){
    //     return{
    //         kitchen:nextProps.kitchen,
    //     }
    // }

    // componentDidUpdate(){
    //     if(this.props.kitchen!==this.state.kitchen){
    //         this.setState({kitchen:this.props.kitchen});
    //     }
    // }

    // handleDishChange = (preval,val) => {
    //     this.setState({dishFilter:val.value,preD:preval.value},()=>{
    //         console.log('dish',this.state);
    //     })
    // }
    // handleActionChange = (preval,val) => {
    //     this.setState({actionFilter:val.value,preA:preval.value},()=>{
    //         console.log('action',this.state);
    //     })
    // }
    // handleLocationChange = (preval,val) => {
    //     this.setState({locationFilter:val.value,preL:preval.value},()=>{
    //         console.log('location',this.state);
    //     })
    // }

    handleDishChange = (val) => {
        this.setState({dishFilter:val.value},()=>{
            console.log('dish',this.state);
        })
    }
    handleActionChange = (val) => {
        this.setState({actionFilter:val.value},()=>{
            console.log('action',this.state);
        })
    }
    handleLocationChange = (val) => {
        this.setState({locationFilter:val.value},()=>{
            console.log('location',this.state);
        })
    }

    sOptions = (data) => {
        let data3 = [{value:'--any--',label:'Any'}]
        if(data.length!==0){
            let key = Object.keys(data);
            for(let i=0;i<key.length;i++){
                data3.push({value:key[i],label:key[i]})
            }
        }
        return data3;
    }

    // cProp = () => {
    //     if(this.state.kitchen.length===0){
    //         return this.props.kitchen;
    //     }else{
    //         return this.state.kitchen;
    //     }
    // }

    // cProp1 = () => {
    //     if(this.state.kitchen.length===0){
    //         if(this.props.kitchen.length===0){
    //             return 1;
    //         }
    //         return Math.ceil(this.props.kitchen.length/4);
    //     }else{
    //         return Math.ceil(this.state.kitchen.length/4);
    //     }
    // }

    render(){
        return (
            <div style={{position:'relative',display:'inline-block'}}>
                <RightHeader 
                    dishes={this.sOptions(this.props.dish)} 
                    locations={this.sOptions(this.props.location)} 
                    actions={this.sOptions(this.props.action)}
                    dChange={this.handleDishChange}
                    aChange={this.handleActionChange}
                    lChange={this.handleLocationChange}
                />
                {/* <RightContent kitchen={this.cProp()} totalCount={this.cProp1()}/> */}
                <RightContent 
                    kitchen={this.props.kitchen} 
                    totalCount={Math.ceil(this.props.kitchen.length/4)}
                    prevStation={this.state.preS}
                    prevAction={this.state.preA}
                    prevDish={this.state.preD}
                    station={this.state.locationFilter}
                    action={this.state.actionFilter}
                    dish={this.state.dishFilter}
                />
                {/* <RightContent kitchen={this.props.kitchen} count={count} stateSet={setCount} totalCount={Math.ceil(props.kitchen.length/10)}/> */}
            </div>
        )
    }
}

export default RightPart;