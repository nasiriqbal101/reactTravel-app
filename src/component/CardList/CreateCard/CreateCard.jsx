import React, { Component } from "react";
import { firestore } from "../../../firebase";
import { globalHistory } from "@reach/router";
import styles from "./CreateCard.module.scss";

export default class CreatCard extends Component {

    state = {
        formData: {
            name: "",
            description: "",
            rate: "",
            picture: "",
            city: "",
            food: "",
            createdBy: ""
        }
    }
    componentDidMount() {
        if (!this.props.user) {
            globalHistory.navigate("login");
        }
    }
    handleInputChange = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        firestore
            .collection("users")
            .add({
                ...this.state.formData,
                createdBy: this.props.user.uid
            })
            .then(() => {
                // console.log("it worked")
            })
    }

    render() {

        console.log(this.state.formData)
        return (
            <form onSubmit={this.handleSubmit} className={styles.Createcard}>
                <h1> Make your country card</h1>
                <input
                    type="text"
                    placeholder="Country Name"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.formData.description}
                    onChange={this.handleInputChange}
                />

                <input
                    type="number"
                    placeholder="Rate"
                    name="rate"
                    value={this.state.formData.rate}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Picture"
                    name="picture"
                    value={this.state.formData.picture}
                    onChange={this.handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Favourite City"
                    name="city"
                    value={this.state.formData.city}
                    onChange={this.handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Favourite Food"
                    name="Food"
                    value={this.state.formData.Food}
                    onChange={this.handleInputChange}
                />
                <button type="submit" value="make yourself"> Create Card </button>
            </form>
        )
    }
}