import React from 'react';
import PostIndexItem from '../posts/post_index_item';

class UserShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const user_posts = Object.values(this.props.posts).filter(post => post.user_id === this.props.user.id);
        return (
            <div>
                <h1>Hi {this.props.user.fname}</h1>
                <ul>
                    {user_posts.reverse().map(post => 
                        <PostIndexItem key={post.id} post={post} user={this.props.user} today={new Date().toDateString()}/>
                    )}
                </ul>
            </div>
        )
    }
};

export default UserShow;