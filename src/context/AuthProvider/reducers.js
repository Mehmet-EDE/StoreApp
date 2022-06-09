export default function reducers(state, action) {
    switch (action.type) {
        case "SET_USER":
            const { user } = action.payload
            console.log('ewqewq', user)
            return { ...state, user: user }

        default:
            return state
    }
};