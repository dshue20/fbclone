import React from 'react';

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = props.post;
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    update(property){
        return e => this.setState({[property]: e.currentTarget.value});
    };

    render(){
        //debugger;
        return (
            <form id="post-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.body} onChange={this.update('body')} placeholder={`What's on your mind, ${this.props.user.fname}?`}/>
                <button type="submit">Post</button>
            </form>
        )
    }
};

export default PostForm;