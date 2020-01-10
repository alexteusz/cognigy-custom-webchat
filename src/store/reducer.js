let initialState = {
    showWelcomeComponent: false,
    currentMessage: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_WELCOME_COMPONENT':
            return {
                ...state,
                showWelcomeComponent: action.showWelcomeComponent,
        }
        case 'SET_CURRENT_MESSAGE': 
            return {
                ...state,
                currentMessage: action.currentMessage
            }
        default:
            return state
    }
}

export default reducer;