import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faUserCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";

export default class FriendButton extends React.Component {
    constructor(props){
        super(props);
        this.addFriend = this.addFriend.bind(this);
        this.addFriendButton = this.addFriendButton.bind(this);
        this.acceptFriend = this.acceptFriend.bind(this);
        this.rejectFriend = this.rejectFriend.bind(this);
        this.getFriendship = this.getFriendship.bind(this);
        this.state = {
            button: 'Add Friend',
            friendship: {}
        };
    };

    addFriend(e){
        e.preventDefault();
        let that = this;
        this.props.createFriendship({
            //id: parseInt(this.props.current_user.id.toString() + this.props.user.id.toString()),
            requestor_id: this.props.current_user.id,
            receiver_id: this.props.user.id,
            status: "pending"
        }).then(() => {
            that.setState({button: "Pending..."});
        });
    }

    acceptFriend(){
        let friendship = this.getFriendship();
        friendship.status = 'accepted';
        this.props.updateFriendship(friendship).then(() => this.setState({friendship: friendship}));
    }

    rejectFriend(){
        friendship = this.getFriendship();
        friendship.status = 'rejected';
        this.props.updateFriendship(friendship).then(() => this.setState({friendship: friendship}));
    }

    addFriendButton(){
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <button type="submit" className="add-friend">
                        <FontAwesomeIcon icon={faUserFriends} /> {this.state.button}
                    </button>
                </form>
            </div>
        )
    }

    acceptRejectButton(){
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

    getFriendship(){
        return (
            Object.values(this.props.friendships.friendships).filter(
                friendship => (friendship.requestor_id === this.props.user.id && friendship.receiver_id === this.props.current_user.id) 
                || (friendship.receiver_id === this.props.user.id && friendship.requestor_id === this.props.current_user.id))[0]
        )
    }

    getFriendStatus(){
        if (!this.props.user){
            return null
        };
        if (this.props.user === this.props.current_user){
            return ''
        };

        if (Object.values(this.props.friendships).length === 0){
            return this.addFriendButton();
        };

        const friendship = this.getFriendship();
        //debugger;
        if (!friendship){
            return this.addFriendButton();
        }
        else if ((friendship.status === 'pending' || friendship.status === 'rejected') && 
        friendship.requestor_id === this.props.current_user.id) {
            return <button className="add-friend">Pending...</button>
        }
        else if (friendship.status === 'pending'){
            return this.acceptRejectButton(friendship);
        }
        else if (friendship.status === 'accepted'){
            return <button className="add-friend">Friends</button>
        }
        else if (friendship.status === 'rejected'){
            return ''
        };
    }

    render(){
        //debugger;
        return (
            this.getFriendStatus()
        )
    }
}