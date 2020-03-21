export const addComment = (comment, topicId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/topics/${topicId}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(topic => dispatch({type: 'ADD_COMMENT', payload: topic}))
    }
}