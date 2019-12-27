import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const createLike = like => dispatch => (
    LikeAPIUtil.createLike(like).then(like => dispatch(receiveLike(like)))
);

export const fetchLikes = (likeable_type, likeable_id) => dispatch => (
    LikeAPIUtil.fetchLikes(likeable_type, likeable_id).then(likes => dispatch(receiveLikes(likes)))
);

export const deleteLike = likeId => dispatch => (
    LikeAPIUtil.deleteLike(likeId).then(() => dispatch(removeLike(likeId)))
);