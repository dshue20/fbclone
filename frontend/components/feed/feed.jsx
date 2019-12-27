import React from 'react';
import {Link} from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import PostIndexContainer from '../posts/post_index_container';
import { faNewspaper, faVideo, faUsers, faFlag, faCoins, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './header';

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
                <Header user={this.props.user} logout={this.props.logout}/>

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
                        <CreatePostFormContainer user={this.props.user}/>
                        <PostIndexContainer current_user={this.props.user}/>
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