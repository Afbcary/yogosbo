import Link from 'next/link';
import React from "react";
import AuthService from "../services/AuthService";

const linkStyle = {
    marginRight: 15
};

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.authService = new AuthService();
        this.state = { user: {} };
    }

    login = () => {
        console.log('login');
        this.authService.login();
    };

    logout = () => {
        console.log('logout');
        this.authService.logout();
    };

    getUser = () => {
        console.log('get user');
        this.authService.getUser().then(user => {
            if (user) {
                console.log('User has been successfully loaded from store.');
            } else {
                console.error('You are not logged in.');
            }
            this.setState({ user });
        });
    };

    render() {
        return (
            <div>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
                <button style={linkStyle} onClick={() => this.login()}>Log in</button>
                <button style={linkStyle} onClick={() => this.logout()}>Log Out</button>
                <button style={linkStyle} onClick={() => this.getUser()}>Get User</button>
            </div>);
    }
}

