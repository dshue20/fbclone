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
        let posts = this.props.posts.map(post => 
            <PostIndexItem post={post} user={this.props.users[post.user_id]}/>
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