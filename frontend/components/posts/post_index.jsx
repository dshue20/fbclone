import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendships: [],
            friendIds: []
        };
    }

    componentDidMount(){
        this.props.fetchPosts().then(
            () => this.props.fetchUsers()).then(
                () => this.props.fetchFriendships()).then(
                    () => this.setState({ friendships: this.getFriendships() })).then(
                        () => this.setState({ friendIds: this.getFriendIds() }));
        this.props.fetchComments();
    }

    getFriendships(){
        return Object.values(this.props.friendships).filter(friendship => (
            friendship.status === 'accepted' && (
                friendship.requestor_id === this.props.current_user.id || 
                    friendship.receiver_id === this.props.current_user.id
            )
        ));
    }

    getFriendIds(){
        const friendIds = [this.props.current_user.id];
        this.state.friendships.forEach(friendship => {
            friendIds.push(friendship.requestor_id);
            friendIds.push(friendship.receiver_id);
        });
        return friendIds;
    }

    render(){
        if (!this.props.users) return null;
        //debugger;
        let posts = Object.values(this.props.posts).filter(post => 
            this.state.friendIds.includes(post.user_id)).reverse().map(post => 
                <PostIndexItemContainer key={post.id} post={post} user={this.props.users[post.user_id]} 
                    today={new Date().toDateString()} current_user={this.props.current_user}/>
        );
        return (
            <div>
                <ul>
                   {posts}
                </ul>
            </div>
        )
    }
}

export default PostIndex;