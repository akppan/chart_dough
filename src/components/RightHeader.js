import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

// let data = [{value:'l',label:'l'}]

class RightHeader extends React.Component {

    state = {
        selectedDish: {value:'--any--',label:'Any'},selectedAction: {value:'--any--',label:'Any'},selectedLocation: {value:'--any--',label:'Any'}
    };

    componentDidUpdate = () => {
        // this.setState({dishes:this.sOptions(this.props.dish),actions:this.sOptions(this.props.action),
        //     locations:this.sOptions(this.props.location)})
        // console.log(this.props);
    }

    handleChange1 = (selectedDish) => {
        // let prevDish = this.state.selectedDish;
        this.setState({ selectedDish }, () => {
            // console.log(`Option selected:`, this.state.selectedDish);
            // this.props.dChange(prevDish,selectedDish);
            this.props.dChange(selectedDish);
            }
        );
    };
    handleChange2 = (selectedAction) => {
        // let prevAction = this.state.selectedAction;
        this.setState({ selectedAction }, () => {
            // console.log(`Option selected:`, this.state.selectedAction)
            // this.props.aChange(prevAction,selectedAction);
            this.props.aChange(selectedAction);
            }
        );
    };
    handleChange3 = (selectedLocation) => {
        // let prevLocation = this.state.selectedLocation;
        this.setState({ selectedLocation }, () => {
            console.log(`Option selected:`, this.state.selectedLocation)
            // this.props.lChange(prevLocation,selectedLocation);
            this.props.lChange(selectedLocation);
            }
        );
    };

    render() {
        const { selectedDish,selectedAction,selectedLocation } = this.state;

        return (
            <div style={{fontSize:'12px',textAlign:'center'}}>
                <div style={{width:'150px',display:'inline-block',marginRight:'10px'}}>
                    <div>Dish</div>
                    <Select value={selectedDish} onChange={this.handleChange1} options={this.props.dishes} />
                </div>
                <div style={{width:'150px',display:'inline-block',marginRight:'10px'}}>
                    <div>Action</div>
                    <Select value={selectedAction} onChange={this.handleChange2} options={this.props.actions} />
                </div>
                <div style={{width:'150px',display:'inline-block',marginRight:'10px'}}>
                    <div>Location</div>
                    <Select value={selectedLocation} onChange={this.handleChange3} options={this.props.locations} />
                </div>
            </div>
        )
    }
}

export default RightHeader;