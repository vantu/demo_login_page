import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
    onClickLogout(){
      this.props.mutate({
          refetchQueries:[{query:query}]
      });
    }
    renderButtons() {
        const {loading, user} = this.props.data;
        if (loading) {
            return <div/>;
        }
        if (user) {
            return (
                <div>
                    <li><a onClick={this.onClickLogout.bind(this)}>Logout</a></li>
                </div>
            )
        }
        else {
            return (
                <div>
                    <li>
                        <Link to="/signup"> Sign Up</Link>
                    </li>
                    <li><Link to="/login"> Login</Link></li>
                </div>
            );
        }
    };

    render() {
        return (
            <nav>

                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>

                </div>
            </nav>
        );
    }
}

export default
graphql(mutation)(
    graphql(query)(Header)
);
