import React from 'react';
import PostIndexItem from '../posts/post_index_item';
import Header from '../feed/header';
import UpdateUserBioContainer from './update_user_bio_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import FriendButtonContainer from '../friendships/friend_button_container';
import FriendResponseContainer from '../friendships/friend_response_container';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gotFriends: false
        };
        this.getFriendships = this.getFriendships.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUsers().then(() => this.props.fetchFriendships(this.props.current_user.id, this.props.user.id));
        this.setState({ gotFriends: false });
        //this.props.fetchFriendships();
    }

    componentDidUpdate(prevProps){
        // if (this.props.friendships.status !== prevProps.friendships.status){
        //     this.setState({ gotFriends: false });
        // }
        if (this.props.user.id !== prevProps.user.id){
            this.props.fetchPosts();
            this.props.fetchUsers().then(() => this.props.fetchFriendships(this.props.current_user.id, this.props.user.id));
        }
    }

    getFriendships(){
        this.props.fetchFriendships(this.props.current_user.id, this.props.user.id);
        this.setState({ gotFriends: true });
    }

    getFriendStatus(){
        //this.setState({ gotFriends: false });
        if (Object.keys(this.props.friendships).length == 0 && this.props.user != this.props.current_user){
            return <FriendButtonContainer user={this.props.user} current_user={this.props.current_user}/>
        }
        else if (this.props.friendships.status === 'pending' && this.props.friendships.requestor_id === this.props.current_user.id) {
            return <button className="add-friend">Pending...</button>
        }
        else if (this.props.friendships.status === 'pending'){
            return <FriendResponseContainer friendship={this.props.friendships}/>
        }
        else if (this.props.friendships.status === 'accepted'){
            return <button className="add-friend">Friends</button>
        };
    }

    render() {
        // if (this.props.user && !this.state.gotFriends) {
        //     this.getFriendships();
        // }

        const user_posts = this.props.user? Object.values(this.props.posts).filter(post => post.user_id === this.props.user.id) : [];
        
        const add_friend = this.getFriendStatus();

        let user_name;
        let user_bio;
        if (this.props.user){
            user_name = <p className="user-show-name">{this.props.user.fname + ' ' + this.props.user.lname}</p>;
            user_bio = <UpdateUserBioContainer id="user-bio-button" user={this.props.user}/>;
        } else {
            user_name = <p className="user-show-name">Loading...</p>;
            user_bio = <p id="user-bio-button">Loading...</p>
        }
        debugger;
        return (
            <div>
                <Header user={this.props.current_user} logout={this.props.logout}/>
                <div className="user-show-container">
                    <div className="user-show">
                        <section className="user-bio-section">
                            <div className="user-name-add-friend">
                                {user_name}
                                {add_friend}
                            </div>
                            <p className="user-bio-title">Bio</p>
                            {user_bio}
                        </section>
                        <section className="user-show-right">
                            <CreatePostFormContainer user={this.props.current_user}/>
                            <ul className="profile-posts">
                                {user_posts.reverse().map(post => 
                                    <PostIndexItem key={post.id} post={post} user={this.props.user} today={new Date().toDateString()}/>
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;