export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: {comment}
    })
);

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);

export const fetchComments = (commentable_type, commentable_id) => (
    $.ajax({
        method: 'GET',
        url: 'api/comments',
        data: {
            commentable_type, commentable_id
        }
    })
);