import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';

class Admin extends Component {

    state = {
        name: '',
        tag: '',
        github: '',
        website: '',
        date_completed: '',
        description: ''
    }
    componentDidMount() {
        this.getProjets();
    }

    getProjets = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleGithubChange = (event) => {
        this.setState({
            github: event.target.value
        })
    }
    handleTagChange = (event) => {
        this.setState({
            tag: event.target.value
        })
    }
    handleWebsiteChange = (event) => {
        this.setState({
            website: event.target.value
        })
    }
    handleDateChange = (event) => {
        this.setState({
            date_completed: event.target.value
        })
        console.log(this.state.date_completed);

    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })


    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PROJECTS', payload: this.state })
        console.log(this.state);

    }
    handleDelete = (project) => {
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: project.id })
    }
    render() {
        return (
            <div>
                <h1>Add New Project</h1>
                <form>
                    <input onChange={this.handleNameChange} type="text" placeholder="Project Name" />
                    <select onChange={this.handleTagChange} placeholder="Tag">
                        <option value={0}></option>
                        <option value={1}>React</option>
                        <option value={2}>Jquery</option>
                        <option value={3}>Node</option>
                        <option value={4}>SQL</option>
                        <option value={5}>Redux</option>
                        <option value={6}>HTML</option>
                    </select>
                    <input onChange={this.handleGithubChange} type="text" placeholder="Github Url" />
                    <input onChange={this.handleWebsiteChange} type="text" placeholder="Website" />
                    <input onChange={this.handleDateChange} type="date" />
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="Description" />
                    <input onClick={this.handleSubmit} type="submit" />
                </form>
                <table>
                    <thead>
                        <tr><th>Name</th>
                            <th>Github</th>
                            <th>Website</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.projects.map(project => {
                            return <tr key={project.id}>
                                <td>{project.name}</td>
                                <td>{project.github}</td>
                                <td>{project.website}</td>
                                <td>{project.date_completed}</td>
                                <td>{project.description}</td>
                                <td><button onClick={() => this.handleDelete(project)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);