import React from 'react';
import {Link} from 'react-router-dom';
import { faThumbsUp, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.createLike = this.createLike.bind(this);
        this.state = {
            numLikes: 0
        };
    }

    componentDidMount(){
        this.props.fetchLikes('post', this.props.post.id).then(
            () => this.setState({numLikes: Object.keys(this.props.likes).length}));
    }

    createLike(e){
        e.preventDefault();
        this.props.createLike({
            likeable_type: 'post',
            likeable_id: this.props.post.id,
            user_id: this.props.current_user.id
        }).then(() => this.props.fetchLikes('post', this.props.post.id)).then(() => 
        this.setState({numLikes: Object.keys(this.props.likes).length}));
    }

    render(){
        const post_body = (this.props.post.body.length < 50)?  <p className="post-body-short">{this.props.post.body}</p> : <p className="post-body-long">{this.props.post.body}</p>
        const date_object = new Date(this.props.post.updated_at);
        let time_string;
        if (date_object.getHours() > 12) {
            date_object.setHours(date_object.getHours()-12);
            time_string = date_object.toTimeString().slice(0,5) + ' PM';
        } else if (date_object.getHours() === 0) {
            date_object.setHours(12)
            time_string = date_object.toTimeString().slice(0,5) + ' AM';
        } else if (date_object.getHours() === 12) {
            time_string = date_object.toTimeString().slice(0,5) + ' PM';
        } else {
            time_string = date_object.toTimeString().slice(0,5) + ' AM';
        };
        if (time_string[0] === '0') {
            time_string = time_string.slice(1);
        };
        const timestamp = date_object.toDateString() === this.props.today ? <p className="post-timestamp">{time_string}</p> : 
            <p className="post-timestamp">{date_object.toDateString() + ' at ' + time_string}</p>;
        //debugger;
        return (
            <li key={this.props.post.id} className="individual-post">
                <Link to={`/users/${this.props.user.id}`} className="post-author">{this.props.user.fname + ' ' + this.props.user.lname}</Link>
                {timestamp}
                {post_body}
                <p>{this.state.numLikes} Pokemon like this</p>
                <div className="post-like-comment">
                    <form onSubmit={this.createLike}>
                        <button className="post-like-comment-button" type="submit"><FontAwesomeIcon icon={faThumbsUp} /> Like</button>
                    </form>
                    <form>
                        <button className="post-like-comment-button" type="submit"><FontAwesomeIcon icon={faCommentAlt} /> Comment</button>
                    </form>
                </div>
            </li>
        )
    }
};