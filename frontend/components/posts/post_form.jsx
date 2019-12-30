import React from 'react';

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = props.post;
    };

    handleSubmit(e){
        e.preventDefault();
        let newPost = Object.assign({}, this.state);
        if (this.props.user){
            newPost.receiver_id = this.props.user.id;
        };
        this.props.createPost(newPost);
        this.setState({
            body: ''
        })
    }

    update(property){
        return e => this.setState({[property]: e.currentTarget.value});
    };

    render(){
        //debugger;
        return (
            <form id="post-form" onSubmit={this.handleSubmit.bind(this)}>
                <textarea value={this.state.body} onChange={this.update('body')} placeholder={`What's on your mind, ${this.props.current_user.fname}?`}/>
                <button type="submit">Post</button>
            </form>
        )
    }
};

export default PostForm;