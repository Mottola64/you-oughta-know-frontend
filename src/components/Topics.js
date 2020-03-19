import React from 'react'
import {Link} from 'react-router-dom'
// import Topic from './Topic'

const Topics = (props) => {

    return (
        <div>
            {props.topics.map(topic =>
                <li key={topic.id}>
                    <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
                </li> )}
        </div>
    )

}

export default Topics