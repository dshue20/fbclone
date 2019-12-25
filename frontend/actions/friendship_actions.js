import * as FriendshipAPIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS"

export const receiveFriendship = friendship => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
});

export const receiveAllFriendships = friendships => ({
    type: RECEIVE_ALL_FRIENDSHIPS,
    friendships
})

export const createFriendship = friendship => dispatch => (
    FriendshipAPIUtil.createFriendship(friendship).then(friendship => dispatch(receiveFriendship(friendship)))
);

export const fetchFriendships = () => dispatch => {
    return (
        FriendshipAPIUtil.fetchFriendships().then(friendships => {
            return (dispatch(receiveAllFriendships(friendships)))
        })
    )
};

export const updateFriendship = friendship => dispatch => (
    FriendshipAPIUtil.updateFriendship(friendship).then(friendship => dispatch(receiveFriendship(friendship)))
);