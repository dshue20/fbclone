import React from 'react';
import {Link} from 'react-router-dom';
import SearchContainer from './search_container';

const Header = props => {
    //debugger;
    return (
        <header id="feed-header">
            <a href="#" className="fb-icon"><img src={window.fb_icon}/></a>
            < SearchContainer user={props.user} current_user={props.current_user} />
            <a href="#"><img className="feed-search-icon" src={window.feed_search}/></a>
            <section id="right-header">
                <Link to={`/users/${props.current_user.id}`} className="right-header-text">{props.current_user.fname}</Link>
                <Link to='/feed' className="right-header-text">Home</Link>
                <a href="#" className="right-header-text">Create</a>
                <a href="#"><img className="feed-right-header-icon" src={window.friends_icon}/></a>
                <a href="#"><img className="feed-right-header-icon" src={window.messenger_icon}/></a>
                <a href="#"><img className="feed-right-header-icon" src={window.notif_icon}/></a>
                <a href="#"><img className="feed-right-header-icon" src={window.help_icon}/></a>
                <a href="#"><img className="feed-right-header-icon" src={window.dropdown_icon}/></a>
                <button className="login-button" onClick={props.logout}>Log Out</button>
            </section>
        </header>
    )
};

export default Header;