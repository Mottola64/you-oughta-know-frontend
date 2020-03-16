import React from 'react'

const Topics = (props) => {

    return (
        <div>
            {props.topics.map((topic, i) => <li key={i}>{topic.title} - {topic.category} - {topic.description}</li>)}
        </div>
    )

}

export default Topics