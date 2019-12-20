import React from 'react';
import {Link} from 'react-router-dom';
import languages from '../splash/languages';
import CreatePostFormContainer from '../posts/create_post_form_container';
import PostIndexContainer from '../posts/post_index_container';
import { faNewspaper, faVideo, faUsers, faFlag, faCoins, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Feed extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        //debugger;
        this.props.logout();
    }

    render() {
        //debugger;
        return (
            <div>
                <header id="feed-header">
                    <a href="#" className="fb-icon"><img src={window.fb_icon}/></a>
                    <input className="feed-search" type="text" placeholder=" Search"/>
                    <a href="#"><img className="feed-search-icon" src={window.feed_search}/></a>
                    <section id="right-header">
                        <Link to={`/users/${this.props.user.id}`} className="right-header-text">{this.props.user.fname}</Link>
                        <a href="#" className="right-header-text">Home</a>
                        <a href="#" className="right-header-text">Create</a>
                        <a href="#"><img className="feed-right-header-icon" src={window.friends_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.messenger_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.notif_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.help_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.dropdown_icon}/></a>
                        <button className="login-button" onClick={this.props.logout}>Log Out</button>
                    </section>
                </header>

                <section id="main-feed">
                    <section id="feed-left">
                        <p className="feed-left-text" id="feed-left-name">{this.props.user.fname} {this.props.user.lname}</p>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="news-icon" icon={faNewspaper} />News Feed</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="messenger-icon" icon={faFacebookMessenger} />Messenger</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="video-icon" icon={faVideo} />Watch</a></div>
                        <p className="feed-left-text" id="feed-left-explore">Explore</p>
                        <div className="feed-left-text"><a href="#"><img className="fb-icon-left" id="feed-left-fb-icon" src={window.fb_icon2}/>Welcome</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="groups-icon" icon={faUsers} />Groups</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="pages-icon" icon={faFlag} />Pages</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="fundraiser-icon" icon={faCoins} />Fundraisers</a></div>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="events-icon" icon={faCalendarAlt} />Events</a></div>
                        <a id="feed-left-see-more" className="feed-left-text" href="#">See More...</a>
                    </section>

                    <section id="feed-center">
                        <h1>This is the feed</h1>
                        <h1>Hi {this.props.user.fname}</h1>
                        <CreatePostFormContainer user={this.props.user}/>
                        <PostIndexContainer />
                    </section>

                    <section id="feed-right">
                        <div id="feed-right-languages">
                            <section>
                                <p>English (US)</p>
                                <a href="#">Ruby</a>
                                <a href="#">Rails</a>
                                <br/>
                                <a href="#">Java</a>
                                <a href="#">Javascript</a>
                                <a href="#">React</a>
                                <a href="#">Redux</a>
                                <br/>
                                <a href="#">Python</a>
                                <a href="#">C</a>
                                <a href="#">C++</a>
                            </section>
                        </div>
                        <p id="feed-right-fb-c">Fakebook © 2019</p>
                    </section>
                </section>
            </div>
        )
    };
};