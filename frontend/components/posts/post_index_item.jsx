import React from 'react';
import {Link} from 'react-router-dom';
import { faThumbsUp, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostIndexItem = props => {
    const post_body = (props.post.body.length < 50)?  <p className="post-body-short">{props.post.body}</p> : <p className="post-body-long">{props.post.body}</p>
    const date_object = new Date(props.post.updated_at);
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
    const timestamp = date_object.toDateString() === props.today ? <p className="post-timestamp">{time_string}</p> : 
        <p className="post-timestamp">{date_object.toDateString() + ' at ' + time_string}</p>;
    //debugger;
    return (
        <li key={props.post.id} className="individual-post">
            <Link to={`/users/${props.user.id}`} className="post-author">{props.user.fname + ' ' + props.user.lname}</Link>
            {timestamp}
            {post_body}
            <div className="post-like-comment">
                <button className="post-like-comment-button"><FontAwesomeIcon icon={faThumbsUp} /> Like</button>
                <button className="post-like-comment-button"><FontAwesomeIcon icon={faCommentAlt} /> Comment</button>
            </div>
        </li>
    )
};

export default PostIndexItem;