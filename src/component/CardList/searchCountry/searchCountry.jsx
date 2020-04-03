import React, { Component } from "react";
import styles from "./searchCountry.module.scss";

export default class SearchCountry extends Component {

    render() {
        return (
            <section className={styles.card}>
                <div className={styles.topContain}>
                    <img src={this.props.country.flag} alt="" />
                    <h1>{this.props.country.name}</h1>
                </div>
                <div className={styles.bottomContain}>
                    <p>{this.props.country.description}</p>
                    <h2> Capital: {this.props.country.capital}</h2>
                    <h2>Population:{this.props.country.population}</h2>
                    <h2>{this.props.country.region}</h2>
                </div>
            </section>
        )
    }
}