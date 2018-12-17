import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../App/App.css'




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
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic" src={project.thumbnail} alt="preview"/>
                                <p>React</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                            </div>
                        case 2:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p> Jquery</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                                <p>{project.description}</p>
                            </div>
                        case 3:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p>Node</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                                <p>{project.description}</p>
                            </div>
                        case 4:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p>SQL</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                                <p>{project.description}</p>
                            </div>
                        case 5:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p>Redux</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                                <p>{project.description}</p>
                            </div>
                        case 6:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p>HTML</p>
                                <p>{project.description}</p>
                            </div>
                        default:
                            return <div className="project" key={project.id}>
                                <h2>{project.name}</h2>
                                <a href={project.github}>Github</a>
                                <img className="projectpic"  src={project.thumbnail} alt="preview"/>
                                <p>'None'</p>
                                <p>{moment(project.date_completed).format('MM/DD/YYYY') }</p>
                                <p>{project.description}</p>
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
