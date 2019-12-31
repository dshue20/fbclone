import React from 'react';
import {Link} from 'react-router-dom';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentFormContainer from './comment_form_container';
import CommentContainer from './comment_container';

export default class Comment extends React.Component {
    constructor(props){
        super(props);
        this.createLike = this.createLike.bind(this);
        this.setReply = this.setReply.bind(this);
        this.state = {
            numLikes: 0,
            liked: false,
            comments: '',
            reply: false
        };
    };

    componentDidMount(){
        this.props.fetchLikes('comment', this.props.comment.id).then(() => 
            {
                if (this.props.likes.likes){
                    this.setState({numLikes: Object.keys(this.props.likes.likes).length})
                } else {
                    this.setState({numLikes: 0})
                }
            }
        );
        this.props.fetchComments('comment', this.props.comment.id).then(() => this.setState({comments: this.comments()}));
    }

    componentDidUpdate(prevProps){
        //debugger;
        if ((Object.keys(prevProps.comments).length + 1 === Object.keys(this.props.comments).length) &&
        (this.props.comments)){
            this.props.fetchComments('comment', this.props.comment.id)
                .then(() => this.setState({
                    comments: this.comments(),
                    reply: false
                }));
        }
    }

    comments(){
        if (this.props.comments){
            return Object.values(this.props.comments).map(comment => 
                <CommentContainer key={comment.id} user={this.props.users[comment.user_id]} 
                current_user={this.props.current_user} comment={comment} />)
        } else {
            return ''
        }
    }

    createLike(e){
        e.preventDefault();
        this.props.createLike({
            likeable_type: 'comment',
            likeable_id: this.props.comment.id,
            user_id: this.props.current_user.id
        })
            .then(() => this.props.fetchLikes('comment', this.props.comment.id))
            .then(() => this.setState(
            {
                numLikes: Object.keys(this.props.likes.likes).length,
                liked: true
            }));
    }

    displayLikes(){
        if (this.state.numLikes > 0){
            return (
                <p className="comment-num-likes"><FontAwesomeIcon icon={faThumbsUp} className="comment-like-thumb"/> {this.state.numLikes}</p>
            )
        } else {
            return
        }
    }

    displayReply(){
        if (this.state.reply){
            //debugger;
            return (
                <div className="reply">
                    <CommentFormContainer user_id={this.props.current_user.id} commentable_type='comment' 
                        commentable_id={this.props.comment.id} placeholder={'reply'}/>
                </div>
            )
        } else {
            return
        }
    }

    setReply(e){
        e.preventDefault();
        this.setState({ reply: true })
    }

    indent(){
        if (this.props.comment.commentable_type === "comment"){
            return "indent-reply";
        } else {
            return "no-indent-reply"
        }
    }

    render(){
        //debugger;
        return (
            <div className={this.indent()}>
                <div className="comment-div">
                    <div className="user-comment-body">
                        <Link to={`/users/${this.props.user.id}`} className="post-author">{this.props.user.fname + ' ' + this.props.user.lname}</Link>
                        <div className="comment-body-likes">
                            <p className="comment-body">{this.props.comment.body}</p>
                            {this.displayLikes()}
                        </div>
                    </div>
                </div>
                {this.displayReply()}
                <div className="comment-actions-div">
                    <form onSubmit={this.createLike}>
                        <button type="submit" className="comment-actions">Like</button>
                    </form>
                    <form onSubmit={this.setReply}>
                        <button type="submit" className="comment-actions">Reply</button>
                    </form>
                </div>
                <div className="post-comments">
                    {this.state.comments}
                </div>
            </div>
        )
    }
};