import React from "react";
import  AuthService  from "../services/AuthService";
import Layout from '../components/Layout';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.authService = new AuthService();
        this.state = { user: {} };
    }

    componentDidMount() {
        this.authService.signinRedirectCallback();
    }

    render() {
        return (
            <Layout>
                callback redirect page
            </Layout>
        );
    }
}