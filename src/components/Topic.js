import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Topic = (props) => {
    // eslint-disable-next-line
    let topic = props.topics.find(topic => topic.id == props.match.params.id)
   
    return (
        <div>
            <h2>
                {topic ? topic.title : null}
            </h2>
            <h3>
                {topic ? topic.category : null}
            </h3>
            <p>
                {topic ? topic.description : null}
            </p>
            
            <CommentsContainer topic={topic}/>
        </div>

    )
}

export default Topic