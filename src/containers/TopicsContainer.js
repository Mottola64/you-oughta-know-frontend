import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchTopics} from '../actions/fetchTopics'
import TopicInput from '../components/TopicInput'
import Topics from '../components/Topics'
import Topic from '../components/Topic'

class TopicsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTopics()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/topics/new' component={TopicInput}/>
                    <Route path='/topics/:id' render={(routerProps) => <Topic {...routerProps} topics={this.props.topics}/>}/>
                    <Route exact path='/topics' render={(routerProps) => <Topics {...routerProps} topics={this.props.topics}/>}/>
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps, {fetchTopics})(TopicsContainer);