import React from 'react';
import {connect} from 'react-redux';

import {fetchTopics} from '../actions/fetchTopics'
import TopicInput from '../components/TopicInput'
import Topics from '../components/Topics'


class TopicsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTopics()
    }

    render() {
        return(
            <div>
                <TopicInput /><br></br>
                <Topics topics={this.props.topics}/>
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