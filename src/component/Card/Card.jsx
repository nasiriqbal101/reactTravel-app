import React, { Component } from "react";
import styles from "./Card.module.scss";

export default class Card extends Component {

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
                    <h2>{this.props.country.region}</h2>
                    <p>{this.props.country.currency}</p>
                </div>
            </section>
        )
    }
}