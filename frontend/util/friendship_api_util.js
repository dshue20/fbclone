export const createFriendship = friendship => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: {friendship}
    })
);

export const fetchFriendships = () => (
    $.ajax({
        method: 'GET',
        url: '/api/friendships'
    })
);

export const updateFriendship = friendship => (
    $.ajax({
        method: 'PATCH',
        url: `/api/friendships/${friendship.id}`,
        data: {friendship}
    })
);