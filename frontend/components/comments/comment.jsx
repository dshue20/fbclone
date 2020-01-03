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
            numLikes: this.props.comment.like_ids.length,
            liked: false,
            reply: false
        };
    };

    componentDidMount(){
        const likes = Object.values(this.props.likes).filter(like => like.likeable_id === this.props.comment.id);
        if (likes.filter(like => like.user_id === this.props.current_user.id).length > 0){
            this.setState({ liked: true })
        };
    };

    componentDidUpdate(prevProps){
        if ((Object.keys(prevProps.comments).length + 1 === Object.keys(this.props.comments).length)){
            this.setState({ reply: false })
        }
    }

    comments(){
        const filteredComments = Object.values(this.props.comments).filter(comment => comment.commentable_id === this.props.comment.id && comment.commentable_type === 'Comment');
        if (filteredComments.length > 0){
            return filteredComments.map(comment => 
                <CommentContainer key={comment.id} user={this.props.users[comment.user_id]} 
                current_user={this.props.current_user} comment={comment} comments={this.props.comments}/>
            )
        } else {
            return ''
        }
    }

    createLike(e){
        e.preventDefault();
        this.props.createLike({
            likeable_type: 'Comment',
            likeable_id: this.props.comment.id,
            user_id: this.props.current_user.id
        })
            .then(() => this.setState({
                numLikes: this.state.numLikes + 1,
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

    likeButton(){
        if (this.state.liked){
            return <button className="comment-actions">Like</button>
        }else {
            return <form onSubmit={this.createLike}>
                <button type="submit" className="comment-actions">Like</button>
            </form>
        }
    }

    displayReply(){
        if (this.state.reply){
            //debugger;
            return (
                <div className="reply">
                    <CommentFormContainer user_id={this.props.current_user.id} commentable_type='Comment' 
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
        if (this.props.comment.commentable_type === "Comment"){
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
                    {this.likeButton()}
                    <form onSubmit={this.setReply}>
                        <button type="submit" className="comment-actions">Reply</button>
                    </form>
                </div>
                <div className="post-comments">
                    {this.comments()}
                </div>
            </div>
        )
    }
};