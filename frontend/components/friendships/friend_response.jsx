import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";

export default class FriendResponse extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.values(this.props.friendships).filter(friendship => 
            (friendship.requestor_id === this.props.user.id && friendship.receiver_id === this.props.current_user.id) || 
            (friendship.requestor_id === this.props.current_user.id && friendship.receiver_id === this.props.user.id))[0];
        this.acceptFriend = this.acceptFriend.bind(this);
        this.rejectFriend = this.rejectFriend.bind(this);
    }

    acceptFriend(){
        //debugger;
        this.setState({status: 'accepted'});
        this.props.updateFriendship(this.state);
    }

    rejectFriend(){
        this.setState({status: 'rejected'});
        this.props.updateFriendship(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.acceptFriend}>
                    <button type="submit" className="add-friend">
                        <FontAwesomeIcon icon={faUserCheck} /> Accept Friend Request
                    </button>
                </form>

                <form onSubmit={this.rejectFriend}>
                    <button type="submit" className="add-friend">
                        <FontAwesomeIcon icon={faUserTimes} /> Reject Friend Request
                    </button>
                </form>
            </div>
        )
    }
}