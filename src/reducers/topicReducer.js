export default function topicReducer(state = {topics: []}, action) {
    switch (action.type) {
        case 'FETCH_TOPICS':
            return {topics: action.payload}
        case 'ADD_TOPIC':
            return {...state, topics: [...state.topics, action.payload]}
        default:
            return state
    }
}