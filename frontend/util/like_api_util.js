export const createLike = like => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: {like}
    })
);

export const deleteLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);

export const fetchLikes = (likeable_type, likeable_id) => (
    $.ajax({
        method: 'GET',
        url: 'api/likes',
        data: {
            likeable_type, likeable_id
        }
    })
);