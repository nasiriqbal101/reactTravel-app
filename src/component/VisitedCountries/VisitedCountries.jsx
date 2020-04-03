import React, { Component } from "react";
import styles from "./VisitedCountries.module.scss";
import { firestore } from "../../firebase";
import CountryInfo from "../VisitedCountries/ContryInfo/CountryInfo";


export default class VisitedCountries extends Component {

    state = {
        countries: [],

    }

    componentDidMount() {
        firestore
            .collection("users")
            .get()
            .then((query) => {
                const countries = query.docs.map(doc => doc.data());
                console.log(countries)
                this.setState(
                    {
                        countries: countries
                    });

            })
    }
    render() {
        console.log(this.state.countries)
        return (
            <>
                <div onClick={this.props.signOut} className={styles.btn} >
                    <button>Sign out</button>
                </div>

                <section className={styles.visit} onClick={this.props.signOut}>
                    {this.state.countries.map((country, index) => (
                        <CountryInfo countryData={country} key={index} />
                    ))}
                </section>
            </>
        )
    }
}