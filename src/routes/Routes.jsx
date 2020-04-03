import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Login from "../component/Login/Login";
import CardList from "../component/CardList/CardList";
import Card from "../component/Card/Card";
import firebase, { providers } from "../firebase";
import SearchCountry from "../component/CardList/searchCountry/searchCountry";
import VisitedCountries from "../component/VisitedCountries";
import CreateCard from "../component/CardList/CreateCard/CreateCard";
import PrivateRoutes from "../routes/PrivateRoutes";


const NotFound = () => (<h2>Oops, page not found</h2>);

export default class Routes extends Component {
    state = {
        user: null
    }

    // componentDidMount() {
    //     this.authListener();
    // }

    // authListener() {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ user });
    //             localStorage.setItem("user", user.uid);
    //         } else {
    //             this.setState({ user: null });
    //             localStorage.removeItem("user");
    //         }
    //     });
    // }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({ user: result.user })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null });
                globalHistory.navigate("/login");
            })
    }

    render() {
        // this.signIn()
        return (
            <Router>
                <Redirect noThrow from="/" to="cards" />
                <CardList path="cards" country={this.props.country} user={this.state.user} />
                <Login path="login" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}>
                    <VisitedCountries path="visitedcountries" user={this.state.user} signOut={this.signOut} />
                </PrivateRoutes>
                <CreateCard path="private/createcard" user={this.state.user} />
                <NotFound default />
            </Router>
        );
    }
}