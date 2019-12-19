import React from 'react';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        //debugger;
        return (
            <div>
                {/* <CreatePostFormContainer /> */}
                <ul>
                    {this.props.posts.map(post => 
                        <li key={post.id} className="individual-post">
                            <p>{post.author}</p>
                            <p>{post.body}</p>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default PostIndex;