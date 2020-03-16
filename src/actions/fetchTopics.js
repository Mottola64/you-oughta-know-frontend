export function fetchTopics() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/topics')
    .then(response => response.json())
    .then(topics => dispatch({
        type: 'FETCH_TOPICS',
        payload: topics
    }))
    }
}