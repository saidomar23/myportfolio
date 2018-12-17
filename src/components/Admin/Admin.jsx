import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green'
// import teal from '@material-ui/core/colors/teal '
import red from '@material-ui/core/colors/red'
import moment from 'moment'
import '../App/App.css'
import {Link} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: green,
       secondary: red
      },
})
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
            <MuiThemeProvider theme={theme}>
            <div>
                <h1>Add New Project</h1>
                <Link to='/'>Projects</Link>
                <form>
                    <input onChange={this.handleNameChange} type="text" placeholder="Project Name" />
                    <select onChange={this.handleTagChange} placeholder="Tag">
                        <option value={0}>Add Tag</option>
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
                
                <Table >
                    <TableHead >
                        <TableRow><TableCell>Name</TableCell>
                            <TableCell>Github</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.projects.map(project => {
                            return <TableRow key={project.id}>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>{project.github}</TableCell>
                                <TableCell>{project.website}</TableCell>
                                <TableCell>{moment(project.date_completed).format('MM/DD/YYYY')}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell><Button variant="contained" color="secondary" onClick={() => this.handleDelete(project)}>Delete</Button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
         </MuiThemeProvider>
        )
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);