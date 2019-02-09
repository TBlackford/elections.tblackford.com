import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import R from '_utils/ramda';

export default class CountryDropdown extends Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        closeDropdown: PropTypes.func.isRequired,
        getCountry: PropTypes.func.isRequired,
        country: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        loading: true
    }

    componentDidMount() {
        window.addEventListener('click', this.dropdownListener);
        window.addEventListener('touchend', this.dropdownListener);

        const { country, getCountry } = this.props;

        if(country.length == 0) {
            getCountry().then(
                () => this.setState({loading: false}),
                (err) => console.log(err)
            )
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.dropdownListener);
        window.removeEventListener('touchend', this.dropdownListener);
    }

    dropdownListener = e => !e.path.includes(this.dropdown) && this.props.closeDropdown();

    render() {
        const { closeDropdown, open, getCountry, country } = this.props;

        return open && (
            <div className="dropdown box" ref={el => { this.dropdown = el; }}>
                <ul className="dropdown-list">
                    {
                        country.map(country => {
                            var iso = country.isoCode;
                            return(                            
                                <li key={country.name} className="dropdown-item">
                                    <Link to={"/" + iso.toLowerCase() + "/v/timeline"} onClick={closeDropdown}>
                                        <div className="columns is-flex-desktop center-align ">
                                            <div className="column is-two-thirds has-text-centered">
                                                {country.name}
                                            </div>                                              
                                            <div className="column is-one-third">
                                                <img src={"/images/" + country.flagUrl} alt={"Flag of " + country.name} />
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
