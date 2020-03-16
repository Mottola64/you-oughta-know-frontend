import React from 'react';
import {connect} from 'react-redux'
import {addTopic} from '../actions/addTopic'

class TopicInput extends React.Component {

    state = {
        title: '',
        category: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTopic(this.state)
        this.setState({
            title: '',
            category: '',
            description: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Topic Title: </label>
                    <input type="text" placeholder="Topic Title" value={this.state.title} name="title" onChange={this.handleChange}/><br></br>
                    <label>Topic Category: </label>
                    <input type="text" placeholder="Topic Category" value={this.state.category} name="category" onChange={this.handleChange}/><br></br>
                    <label>Topic Description: </label>
                    <input type="text" placeholder="Topic Description" value={this.state.description} name="description" onChange={this.handleChange}/><br></br>
                    <input type="submit"/>
                </form>
            </div>

        )
    }
}

export default connect(null, {addTopic})(TopicInput);