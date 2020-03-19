import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Topic = (props) => {

    console.log(props)
    let topic = props.topics[props.match.params.id - 1]
    // console.log(topic)
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