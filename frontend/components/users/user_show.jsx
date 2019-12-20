import React from 'react';

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
                    {user_posts.map(post => 
                        <li key={post.id}>
                            <p>{post.user_id}</p>
                            <p>{post.body}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
};

export default UserShow;