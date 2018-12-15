import React, { Component } from 'react';
import {connect} from 'react-redux';


class Admin extends Component{

    state = {
        name : '',
        tag: '',
        github: '',
        website: '',
        thumbnail: '',
        date_completed: '',
        description: ''
    }
    componentDidMount(){
        this.getProjets();
    }

    getProjets = () =>{
        this.props.dispatch({type: 'GET_PROJECTS'})
    }

    render(){
        return(
            <div>
                <h1>Add New Project</h1>
                <form>
                    <input type="text" placeholder="Name"/>
                    <select placeholder="Tag">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </select>
                    <input type="text" placeholder="Github Url"/>
                    <input type="text" placeholder="Website"/>
                    <input type="text" placeholder="Date"/> 
                    <input type="text" placeholder="Description"/>
                    <input type="submit"/>
                </form>
                <table>
                        <thead>
                            <tr><th>Name</th>
                            <th>Github</th>
                            <th>Website</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                {this.props.reduxStore.projects.map(project =>{
                    return <tr key={project.id}>
                            <td>

                            </td>
                        </tr>
                   
                  
                })}
                 </tbody>
                  </table>
                {JSON.stringify(this.props.reduxStore.projects)}
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);