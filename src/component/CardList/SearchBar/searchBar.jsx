import React, { Component } from "react";
import styles from "./searchBar.module.scss";

export default class SearchBar extends Component {
    render() {
        return (<input
            className={styles.SearchBar}
            placeholder=" Search Country.."
            value={this.props.searchText}
            onChange={this.props.setSearchText}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
        />
        )
    }
}