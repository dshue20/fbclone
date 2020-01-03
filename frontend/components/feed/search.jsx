import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usersSearch: []
        };
        this.update = this.update.bind(this);
    };

    update(e){
        let searchString = e.currentTarget.value;
        if (searchString != ''){
            this.setState({
                usersSearch: Object.values(this.props.users).filter(user => (user.fname + ' ' + user.lname).slice(0, searchString.length).toLowerCase() === searchString.toLowerCase())
            });
        } else {
            this.setState({ usersSearch: [] })
        }
    }

    render(){
        return (
            <div className="search-div">
                <input onChange={this.update} className="feed-search" type="text" placeholder="Search"/>
                <ul className="search-results">
                    {this.state.usersSearch.map(user => <li key={user.id} className="search-result"><Link to={`/users/${user.id}`}>{user.fname + ' ' + user.lname}</Link></li>)}
                </ul>
            </div>
        )
    }
};