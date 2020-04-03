import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import SearchBar from "../CardList/SearchBar/searchBar";
import SearchCountry from "./searchCountry/searchCountry";

export default class CardList extends Component {


    state = {
        searchFocused: false,
        allCountries: [],
        countryName: [{
            code: "bt",
            description: "A dozen nations vie for the title of real-life Shangri-La, but Bhutan’s claim has more clout than most. This tiny piece of Himalayan paradise operates a strict ‘high-value, low-impact’ tourism policy, compelling travellers to pay a high daily fee just to set foot in its pine-scented, monastery-crowned hills. The pay-off for visitors is a chance to walk along mountain trails unsullied by litter, in the company of people whose Buddhist beliefs put them uniquely in tune with their environment."
        },
        {
            code: "GB",
            description: "Once the country’s first line of defence against invaders, the English coastline these days is a peaceful place where locals and visitors can enjoy more tranquil pursuits. Taking a bracing walk on a windswept pier, eating delicious fish and chips, searching for marine life in rockpools, finding fossils in ancient cliffs, building sandcastles and dolphin-spotting on picturesque beaches are just some of the activities offered by the English seaside"
        },
        {
            code: "mk",
            description: "Due to its lack of coastline and inland location, Macedonia is often overlooked as a holiday destination and is widely unvisited even by the most seasoned travelers of Europe. Yet with its UNESCO world heritage national parks, dramatic mountain ranges and the captivating Lake Ohrid, the country is home to some of the continent’s most jaw-dropping scenery, as well as a host of hidden, gorgeous destination"
        },
        {
            code: "sz",
            description: "Petite, pleasant and packed with culture, adventure and legendary wildlife, the newly named Kingdom of eSwatini (formerly Swaziland) is one of Southern Africa’s most underrated (and least visited) destinations. A new international airport, as well as improved road infrastructure between it, conservation areas and the capital, are aimed to increase visitor numbers in the years ahead – get here in 2020 to ensure yourself a front seat. The varied landscapes within its parks and reserves provide one exciting revelation after another, whether it’s zip lining, trekking, whitewater rafting or mind-blowing rhino encounters."
        },

        {
            code: "cr",
            description: "Costa Rica flies the flag for sustainable tourism. This small country’s vast biodiversity attracts visitors keen to spot sleepy sloths in trees, red-eyed frogs paralysing their predators, and whales in the Pacific. Costa Ricans understand the importance of preserving their slice of tropical paradise and have found a way to invite others in while living in harmony with their neighbours – from leafcutter ants to jaguars. Ninety percent of the country’s energy is created by renewable sources, and it could become one of the first carbon-neutral countries in 2020."
        },

        {
            code: "nl",
            description: "In the year that marks 75 years of freedom since the end of WWII, the Netherlands is ready to celebrate with events across the country. Vibrant Amsterdam always deserves a visit, but by making use of the excellent train network you can explore a host of celebrations in stunning cities and get more bang for your euros. April and May are the months to visit, as you can take in King's Day, Liberation Day and the Eurovision Song Contest, which will be hosted in the country this year"
        },

        {
            code: "lr",
            description: "For most outsiders, Liberia is a bit of a mystery. But those in the know wax lyrical about the optimism of its people and the country’s natural wonders. There are idyllic beaches, washed by some of West Africa’s best surf at low-key resorts such as Robertsport. Then there’s Sapo National Park, the second-largest area of primary rainforest in West Africa. In these dense forests, you stand a chance of running into chimpanzees, forest elephants and Liberia’s famous pygmy hippos – no larger than a Shetland pony. "
        },

        {
            code: "ma",
            description: "Morocco is having a moment, with time-honoured attractions complemented by sustainable-yet-stylish lodging, restaurants serving up seasonal produce and coastal wellness retreats mixing up yoga and surfing. And thanks to improved infrastructure it’s easier to get around by road, while Africa’s first high-speed train means that you can zip from Casablanca to Tangier in just two hours. Ancient medinas are getting a makeover in Fez, Essaouira, Meknes, Tetouan and Marrakesh, which will be crowned Africa’s first Capital of Culture in 2020 in celebration of its rich heritage."
        },

        {
            code: "uy",
            description: "Morocco is having a moment, with time-honoured attractions complemented by sustainable-yet-stylish lodging, restaurants serving up seasonal produce and coastal wellness retreats mixing up yoga and surfing. And thanks to improved infrastructure it’s easier to get around by road, while Africa’s first high-speed train means that you can zip from Casablanca to Tangier in just two hours. Ancient medinas are getting a makeover in Fez, Essaouira, Meknes, Tetouan and Marrakesh, which will be crowned Africa’s first Capital of Culture in 2020 in celebration of its rich heritage."
        },

        ],

        countries: [],
        searchText: "",
        filteredCountries: []
    }

    searchFocus = () => {
        // document.querySelector('nav').style.display = "none";s
        this.setState({ searchFocused: true, filteredCountries: [] });
    };

    searchBlur = () => {
        // document.querySelector('nav').style.display = "flex";
        this.setState({ searchFocused: false });
    };

    handleChange = (value) => {
        console.log(value);
    }

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterUsers);
    }

    filterUsers = () => {
        if (this.state.searchText === "") {
            this.setState({ filteredCountries: [] })
        } else {
            let filteredCountries = this.state.allCountries.filter(country => {
                return country.name.toLowerCase().includes(this.state.searchText.toLowerCase());
            })
            this.setState({ filteredCountries });
        }
    }

    componentDidMount() {
        let string = "";
        this.state.countryName.forEach(country => string += `${country.code};`)
        console.log(string)
        fetch(`https://restcountries.eu/rest/v2/alpha?codes=${string}`)
            .then(response => response.json())
            .then(countries => {
                console.log(countries);
                for (let i = 0; i < countries.length; i++) {
                    countries[i]['description'] = this.state.countryName[i].description
                }
                this.setState({
                    countries,
                    filteredCountries: countries
                });
            })

        fetch("https://restcountries.eu/rest/v2")
            .then(response => response.json())
            .then(countries => {
                this.setState({ allCountries: countries })
            })
    }

    render() {
        console.log(this.state.allCountries);
        if (this.state.searchFocused) {
            return (
                <>
                    <SearchBar onFocus={this.searchFocus} onBlur={this.searchBlur} searchText={this.state.searchText} setSearchText={this.setSearchText} />
                    {this.state.filteredCountries.map((country, index) => (
                        // <div onClick={() => this.handleChange(country.name)}>
                        <div>
                            <SearchCountry country={country} key={index} />
                        </div>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <SearchBar onFocus={this.searchFocus} onBlur={this.searchBlur} searchText={this.state.searchText} setSearchText={this.setSearchText} />
                    <section className={styles.cardlist}>
                        {this.state.countries.map((country, index) => (
                            <div onClick={() => this.handleChange(country.name)}>
                                <Card country={country} key={index} />
                            </div>
                        ))}
                    </section>
                </>
            );
        }
    }
}