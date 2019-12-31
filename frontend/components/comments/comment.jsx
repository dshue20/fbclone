import React from 'react';
import {Link} from 'react-router-dom';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Comment extends React.Component {
    constructor(props){
        super(props);
        this.createLike = this.createLike.bind(this);
        this.state = {
            numLikes: 0,
            liked: false,
            comments: ''
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
        //this.props.fetchComments('post', this.props.post.id).then(() => this.setState({comments: this.comments()}));
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

    render(){
        //debugger;
        return (
            <div>
                <div className="comment-div">
                    <div>
                        <Link to={`/users/${this.props.user.id}`} className="post-author">{this.props.user.fname + ' ' + this.props.user.lname}</Link>
                        <div className="comment-body-likes">
                            <p className="comment-body">{this.props.comment.body}</p>
                            {this.displayLikes()}
                        </div>
                    </div>
                </div>
                <div className="comment-actions-div">
                    <form onSubmit={this.createLike}>
                        <button type="submit" className="comment-actions">Like</button>
                    </form>
                    <form>
                        <button type="submit" className="comment-actions">Comment</button>
                    </form>
                </div>
            </div>
        )
    }
};