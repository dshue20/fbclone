import React from 'react';
import PostIndexItemContainer from '../posts/post_index_item_container';
import Header from '../feed/header';
import UpdateUserBioContainer from './update_user_bio_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import FriendButtonContainer from '../friendships/friend_button_container';
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUsers().then(() => this.props.fetchFriendships());
        this.props.fetchComments();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.props.fetchPosts();
            this.props.fetchUsers().then(() => this.props.fetchFriendships())
        }
    }

    render() {
        const user_posts = this.props.user? Object.values(this.props.posts).filter(post => 
            (post.user_id === this.props.user.id && !post.receiver_id) || (post.receiver_id === this.props.user.id)) 
            : [];

        let user_name;
        let user_bio;
        let user_bday;
        if (this.props.user){
            user_name = <p className="user-show-name">{this.props.user.fname + ' ' + this.props.user.lname}</p>;
            user_bio = <UpdateUserBioContainer id="user-bio-button" user={this.props.user}/>;
            user_bday = 
                <div className="birthday-div">
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    <p className="birthday-p">{this.props.user.birthday}</p>
                </div>;
        } else {
            user_name = <p className="user-show-name">Loading...</p>;
            user_bio = <p id="user-bio-button">Loading...</p>
            user_bday = 
                <div className="birthday-div">
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    <p className="birthday-p">Loading...</p>
                </div>;
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
                                <FriendButtonContainer user={this.props.user} current_user={this.props.current_user} 
                                friendships={this.props.friendships}/>
                            </div>
                            {user_bday}
                            <p className="user-bio-title">Bio</p>
                            {user_bio}
                        </section>
                        <section className="user-show-right">
                            <CreatePostFormContainer current_user={this.props.current_user} user={this.props.user}/>
                            <ul className="profile-posts">
                                {user_posts.reverse().map(post => 
                                    <PostIndexItemContainer key={post.id} post={post} 
                                    user={this.props.allUsers[post.user_id]} today={new Date().toDateString()} 
                                    current_user={this.props.current_user} allComments={this.props.comments}/>
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