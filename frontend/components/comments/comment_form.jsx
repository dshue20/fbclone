import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            user_id: this.props.user_id,
            commentable_type: this.props.commentable_type,
            commentable_id: this.props.commentable_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        //debugger;
        this.props.createComment(this.state).then(() => this.setState({body: ''}));
    }

    update(){
        return e => this.setState({body: e.currentTarget.value});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <input className="comment-text" type="text" onChange={this.update()} value={this.state.body} placeholder="Write a comment..."/>
                <button className="comment-button" type="submit">Comment</button>
            </form>
        )
    }
};