import React from 'react';
import PostIndexItem from '../posts/post_index_item';
import Header from '../feed/header';
import UpdateUserBioContainer from './update_user_bio_container';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

class UserShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const user_posts = Object.values(this.props.posts).filter(post => post.user_id === this.props.user.id);
        let add_friend;
        if (this.props.user != this.props.current_user) {
            add_friend = <button className="add-friend"><FontAwesomeIcon icon={faUserFriends} /> Add Friend</button>
        };
        //debugger;
        return (
            <div>
                <Header user={this.props.current_user} logout={this.props.logout}/>
                <div className="user-show-container">
                    <div className="user-show">
                        <section className="user-bio-section">
                            <div className="user-name-add-friend">
                                <p className="user-show-name">{this.props.user.fname + ' ' + this.props.user.lname}</p>
                                {add_friend}
                            </div>
                            <p className="user-bio-title">Bio</p>
                            <UpdateUserBioContainer id="user-bio-button" user={this.props.user}/>
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