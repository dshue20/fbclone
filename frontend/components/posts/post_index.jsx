import React from 'react';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        if (!this.props.users) return null;
        //debugger;
        let posts = this.props.posts.map(post => 
            <li key={post.id} className="individual-post">
                <p>{this.props.users[post.user_id].fname + ' '  + this.props.users[post.user_id].lname}</p>
                <p>{post.body}</p>
            </li>
            // <PostIndexItem post={post}/>
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