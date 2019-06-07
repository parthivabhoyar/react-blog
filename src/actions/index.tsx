import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch: any) => {
    const res = await jsonPlaceHolder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: res.data
    });
};

export const fetchUser = (userId: number) => async (dispatch: any) => {
    const res = await jsonPlaceHolder.get('/users/' + userId);

    dispatch({
        type: 'FETCH_USER',
        payload: res.data
    });
};