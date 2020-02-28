import React from 'react';
import {Link} from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import PostIndexContainer from '../posts/post_index_container';
import { faNewspaper, faGlobe, faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
                <Header current_user={this.props.current_user} logout={this.props.logout}/>

                <section id="main-feed">
                    <section id="feed-left">
                        <p className="feed-left-text" id="feed-left-name">{this.props.current_user.fname} {this.props.current_user.lname}</p>
                        <div className="feed-left-text"><a href="#"><FontAwesomeIcon className="feed-left-icon" id="news-icon" icon={faNewspaper} />News Feed</a></div>
                        <div className="feed-left-text"><Link to={`/users/${this.props.current_user.id}`}><FontAwesomeIcon className="feed-left-icon" id="user-icon" icon={faUser} />My Profile</Link></div>
                        <p className="feed-left-text" id="feed-left-explore">Explore</p>
                        <div className="feed-left-text"><a href="http://www.derekshue.com/"><FontAwesomeIcon className="feed-left-icon" id="portfolio-icon" icon={faGlobe} />Portfolio</a></div>
                        <div className="feed-left-text"><a href="https://www.linkedin.com/in/derek-shue-641918177/"><FontAwesomeIcon className="feed-left-icon" id="linkedin-icon" icon={faLinkedin} />LinkedIn</a></div>
                        <div className="feed-left-text"><a href="https://github.com/dshue20/fbclone"><FontAwesomeIcon className="feed-left-icon" icon={faGithub} />Github</a></div>
                        <div className="feed-left-text"><a href="http://www.derekshue.com/images/Shue_Derek_Resume.pdf"><FontAwesomeIcon className="feed-left-icon" id="resume-icon" icon={faFile} />Résumé</a></div>
                    </section>

                    <section id="feed-center">
                        <CreatePostFormContainer current_user={this.props.current_user}/>
                        <PostIndexContainer current_user={this.props.current_user}/>
                    </section>

                    <section id="feed-right">
                        <div id="feed-right-languages">
                            <section>
                                <p>English (US)</p>
                                <a href="#">Ruby</a>
                                <a href="#">Rails</a>
                                <br/>
                                <a href="#">Javascript</a>
                                <a href="#">React</a>
                                <a href="#">Redux</a>
                                <a href="#">MongoDB</a>
                                <br/>
                                <a href="#">Python</a>
                                <a href="#">Express</a>
                                <a href="#">Node.js</a>
                                <a href="#">GraphQL</a>
                            </section>
                        </div>
                        <p id="feed-right-fb-c">Fakebook © 2019</p>
                    </section>
                </section>
            </div>
        )
    };
};