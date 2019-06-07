import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash';

export const fetchPosts = () => async (dispatch: any) => {
    const res = await jsonPlaceHolder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: res.data
    });
};

const _fetchUser = _.memoize(async (userId: number, dispatch: any) => {
    const res = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: res.data
    });
})

export const fetchUser = (userId: number) => (dispatch: any) => _fetchUser(userId, dispatch)