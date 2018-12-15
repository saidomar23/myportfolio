import React, { Component } from 'react';
import {connect} from 'react-redux';


class Projects extends Component{
    render(){
        return(
            <div>
                <p>hello</p>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(Projects);
