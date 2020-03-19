import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {

    render() {
       return (
           <div>
               <CommentInput topic={this.props.topic}/>
               <Comments comments={this.props.topic && this.props.topic.comments}/>
           </div>
       ) 
    }

}

export default CommentsContainer