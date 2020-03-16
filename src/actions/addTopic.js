export const addTopic = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/topics', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(topic => dispatch({type: 'ADD_TOPIC', payload: topic}))
    }
}