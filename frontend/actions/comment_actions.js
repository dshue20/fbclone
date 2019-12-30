import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = (commentable_type, commentable_id) => dispatch => (
    CommentAPIUtil.fetchComments(commentable_type, commentable_id).then(comments => dispatch(receiveComments(comments)))
);

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);