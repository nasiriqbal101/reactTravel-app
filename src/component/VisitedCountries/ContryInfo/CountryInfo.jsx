import React, { Component } from "react";
import styles from "./CountryInfo.module.scss";

export default class CountryInfo extends Component {
    render() {
        return (
            <section className={styles.countryinfo}>
                <h1>Country: {this.props.countryData.name}</h1>
                <h2>Description: {this.props.countryData.description}</h2>
                <h2>Rate: {this.props.countryData.rate}</h2>
                <h2>Favourite City: {this.props.countryData.city}</h2>
                <h2>Favourite Food: {this.props.countryData.Food}</h2>
            </section>
        )
    }
}



