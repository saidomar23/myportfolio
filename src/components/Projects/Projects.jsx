import React, { Component } from 'react';
import { connect } from 'react-redux';



class Projects extends Component {
    componentDidMount() {
        this.getProjets();
    }

    getProjets = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' })
    }
    render() {

        return (
            <div>
                {this.props.reduxStore.projects.map(project => {
                    switch (project.tag_id) {
                        case 1:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>React</p>
                            </div>
                        case 2:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <span> Jquery</span>
                                <p>{project.date_completed}</p>
                                <p>{project.description}</p>
                            </div>
                        case 3:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>Node</p>
                            </div>
                        case 4:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>SQL</p>
                            </div>
                        case 5:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>Redux</p>
                            </div>
                        case 6:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>HTML</p>
                            </div>
                        default:
                            return <div key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <p>'None'</p>
                            </div>
                    }
                })}


            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Projects);
