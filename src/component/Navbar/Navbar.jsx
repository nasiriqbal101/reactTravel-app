import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import Home from "./Home/home";
import Login from "../Login";

export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.Navbar}>
                <nav>
                    <ul className={StyleSheet.nav_links}>
                        <li> <Home route="/login" name="Login" /></li>
                        <li> <Home route="/private/visitedcountries" name="Visited Countries" /> </li>
                        <li> <Home route="/private/createcard" name="Rate Country" /> </li>
                    </ul>
                </nav>
            </section>
        )
    }
}