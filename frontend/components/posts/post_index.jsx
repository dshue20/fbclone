import React from 'react';
import CreatePostFormContainer from './create_post_form_container';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        if (!this.props.users) return null;
        //debugger;
        let posts = this.props.posts.reverse().map(post => 
            <PostIndexItem key={post.id} post={post} user={this.props.users[post.user_id]} today={new Date().toDateString()}/>
        );
        return (
            <div>
                {/* <CreatePostFormContainer /> */}
                <ul>
                   {posts}
                </ul>
            </div>
        )
    }
}

export default PostIndex;