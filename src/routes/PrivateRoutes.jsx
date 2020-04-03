import React, { Component } from "react";
import { globalHistory } from "@reach/router";
import CardList from "../component/CardList/CardList";

export default class PrivateRoutes extends Component {
    render() {
        console.log(this.props.user)
        if (!this.props.user) {
            globalHistory.navigate("/cards");
            return <CardList />;
        } else {
            return this.props.children;
        }
    }
}