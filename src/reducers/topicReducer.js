export default function topicReducer(state = {topics: []}, action) {
    
    switch (action.type) {
        case 'FETCH_TOPICS':
            return {topics: action.payload}
        case 'ADD_TOPIC':
            return {topics: [...state.topics, action.payload]}
        case 'ADD_COMMENT':
            const topics = [...state.topics]
            const commentedTopic = topics.find(topic => topic.id === action.payload.id)
            commentedTopic.comments = action.payload.comments


            return { topics }
        default:
            return state
    }
}