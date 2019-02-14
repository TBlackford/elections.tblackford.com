import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import R from '_utils/ramda';

// For the arrow
import 'font-awesome/css/font-awesome.min.css';

export default class CountryDropdown extends Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        closeDropdown: PropTypes.func.isRequired,
        getCountry: PropTypes.func.isRequired,
        country: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        countries: []
    }

    componentDidMount() {
        window.addEventListener('click', this.dropdownListener);
        window.addEventListener('touchend', this.dropdownListener);

        const { country, getCountry } = this.props;

        if(country.length == 0) {
            getCountry().then(
                (countries) => this.setState({countries: countries}),
                () => console.log("Error")
            );
        }        
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.dropdownListener);
        window.removeEventListener('touchend', this.dropdownListener);
    }

    dropdownListener = e => !e.path.includes(this.dropdown) && this.props.closeDropdown();

    render() {
        const { closeDropdown, open } = this.props;
        const { countries } = this.state;

        return open && (
            <div className="dropdown box" ref={el => { this.dropdown = el; }}>
                <ul className="dropdown-list">
                    <li className="dropdown-item has-text-centered">
                        <Link to="/countrylist">
                            List of Countries
                        </Link>
                    </li>
                    <hr />
                    {
                        countries.map(country => {
                            var iso = country.isoCode;
                            return(                            
                                <li key={country.name} className="dropdown-item">
                                    <Link to={"/" + iso.toLowerCase() + "/votes/timeline"} onClick={closeDropdown}>
                                        <div className="columns is-flex-desktop center-align">
                                            <div className="column is-6 has-text-centered">
                                                {country.name}
                                            </div>                                              
                                            <div className="levels column">
                                                <div className="level-item is-four-fifths">
                                                    <img src={"/images/" + country.flagUrl} alt={"Flag of " + country.name} />                                                    
                                                </div>
                                            </div>         
                                            <div className="column is-2 center-align ">
                                                <ul className="fa fa-angle-right">      
                                                    {/*TODO: add in the types of elections here*/}                                              
                                                </ul>
                                            </div>                                    
                                        </div>                                      
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
