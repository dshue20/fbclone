export const createFriendship = friendship => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: {friendship}
    })
);

export const fetchFriendships = (requestor_id, receiver_id) => (
    $.ajax({
        method: 'GET',
        url: '/api/friendships',
        data: {requestor_id, receiver_id}
    })
);

export const updateFriendship = friendship => (
    $.ajax({
        method: 'PATCH',
        url: `/api/friendships/${friendship.id}`,
        data: {friendship}
    })
);