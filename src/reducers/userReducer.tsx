interface ReduxAction {
    type: string;
    payload: any;
}

interface UserData {
    userId: number,
    username: string
}

export default (state: Array<UserData> = [], action: ReduxAction) => {
    if (action.type === 'FETCH_USER') {
        return [...state, { userId: action.payload.id, username: action.payload.username }];
    }

    return state;
}