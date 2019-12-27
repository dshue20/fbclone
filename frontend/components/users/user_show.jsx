import React from 'react';
import PostIndexItemContainer from '../posts/post_index_item_container';
import Header from '../feed/header';
import UpdateUserBioContainer from './update_user_bio_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import FriendButtonContainer from '../friendships/friend_button_container';
import FriendResponseContainer from '../friendships/friend_response_container';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendship: ''
        };
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUsers().then(() => this.props.fetchFriendships()).then(() => this.setState({ friendship: this.getFriendStatus() }));
    }

    componentDidUpdate(prevProps){
        // debugger;
        // if (!this.props.user){
        //     this.props.fetchPosts();
        //     this.props.fetchUsers().then(() => this.props.fetchFriendships()).then(() => this.setState({ friendship: this.getFriendStatus() }));
        // } else if (this.props.user.id !== prevProps.user.id){
        //     this.props.fetchPosts();
        //     this.props.fetchUsers().then(() => this.props.fetchFriendships()).then(() => this.setState({ friendship: this.getFriendStatus() }));
        // };
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.props.fetchPosts();
            this.props.fetchUsers().then(() => this.props.fetchFriendships()).then(() => this.setState({ friendship: this.getFriendStatus() }));
        }
    }

    getFriendStatus(){
        //debugger;
        if (!this.props.user){
            return null
        };
        if (this.props.user === this.props.current_user){
            return ''
        };
        const friendship = Object.values(this.props.friendships.friendships).filter(
            friendship => (friendship.requestor_id === this.props.user.id && friendship.receiver_id === this.props.current_user.id) 
            || (friendship.receiver_id === this.props.user.id && friendship.requestor_id === this.props.current_user.id))[0];
        if (!friendship){
            return <FriendButtonContainer user={this.props.user} current_user={this.props.current_user}/>
        }
        else if ((friendship.status === 'pending' || friendship.status === 'rejected') && 
        friendship.requestor_id === this.props.current_user.id) {
            return <button className="add-friend">Pending...</button>
        }
        else if (friendship.status === 'pending'){
            return <FriendResponseContainer user={this.props.user} current_user={this.props.current_user}/>
        }
        else if (friendship.status === 'accepted'){
            return <button className="add-friend">Friends</button>
        }
        else if (friendship.status === 'rejected'){
            return ''
        };
    }

    render() {
        const user_posts = this.props.user? Object.values(this.props.posts).filter(post => post.user_id === this.props.user.id) : [];

        let user_name;
        let user_bio;
        if (this.props.user){
            user_name = <p className="user-show-name">{this.props.user.fname + ' ' + this.props.user.lname}</p>;
            user_bio = <UpdateUserBioContainer id="user-bio-button" user={this.props.user}/>;
        } else {
            user_name = <p className="user-show-name">Loading...</p>;
            user_bio = <p id="user-bio-button">Loading...</p>
        }
        //debugger;
        return (
            <div>
                <Header user={this.props.current_user} logout={this.props.logout}/>
                <div className="user-show-container">
                    <div className="user-show">
                        <section className="user-bio-section">
                            <div className="user-name-add-friend">
                                {user_name}
                                {this.state.friendship}
                            </div>
                            <p className="user-bio-title">Bio</p>
                            {user_bio}
                        </section>
                        <section className="user-show-right">
                            <CreatePostFormContainer user={this.props.current_user}/>
                            <ul className="profile-posts">
                                {user_posts.reverse().map(post => 
                                    <PostIndexItemContainer key={post.id} post={post} 
                                    user={this.props.user} today={new Date().toDateString()} 
                                    current_user={this.props.current_user}/>
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