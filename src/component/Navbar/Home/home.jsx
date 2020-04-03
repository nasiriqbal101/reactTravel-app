import React, { Component } from "react";
import styles from "./home.module.scss";
import { Link } from "@reach/router";

export default class Home extends Component {
    render() {
        return (
            <p className={styles.home} >
                <Link to={this.props.route}>{this.props.name}</Link>
            </p>
        )
    }
}