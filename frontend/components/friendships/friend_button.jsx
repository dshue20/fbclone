import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default class FriendButton extends React.Component {
    constructor(props){
        super(props)
        this.addFriend = this.addFriend.bind(this)
    };

    addFriend(){
        this.props.createFriendship({
            //id: parseInt(this.props.current_user.id.toString() + this.props.user.id.toString()),
            requestor_id: this.props.current_user.id,
            receiver_id: this.props.user.id,
            status: "pending"
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <button type="submit" className="add-friend">
                        <FontAwesomeIcon icon={faUserFriends} /> Add Friend
                    </button>
                </form>
            </div>
        )
    }
}