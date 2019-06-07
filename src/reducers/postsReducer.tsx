interface ReduxAction {
    type: string;
    payload: any;
}


export default (state = [], action: ReduxAction) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return state;
}