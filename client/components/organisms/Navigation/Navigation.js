import React    from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import R from '_utils/ramda';
import CountryDropdown from '_molecules/CountryDropdown';

export default function Navigation(props) {
    const {
        pathname, toggleDropdown, closeDropdown, dropdownOpen,
    } = props;

    const isCountryList = (pathname.length === 12)
        ? pathname === '/countrylist'
        : R.slice(0, 13, pathname) === '/countrylist/';

    const countryItemClasses = classNames({
        'navbar-item': true,
        'is-tab': true,
        'is-hidden-mobile': true,
        'is-active': isCountryList,
    });

    return (
        <nav className="navbar is-fixed-top has-shadow" role="navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item" aria-label="main navigation">
                        <h3 className="title is-3 logo">
                            Election Histories
                        </h3>
                    </Link>
                    <a 
                        className="navbar-item is-hidden-desktop"
                        onClick={toggleDropdown}
                        onKeyPress={toggleDropdown} 
                    >
                        <h6 className="title is-6">
                            Countries
                        </h6>
                    </a>
                </div>


                <div className="navbar-menu">                      
                    <div className="navbar-start">
                        <a 
                            className={countryItemClasses}
                            onClick={toggleDropdown}
                            onKeyPress={toggleDropdown}                         
                        >
                            <h6 className="title is-6">
                            Countries
                            </h6>
                        </a>
                    </div>                  
                </div>
                <CountryDropdown open={dropdownOpen} closeDropdown={closeDropdown} />
            </div>
        </nav>
    );
}

Navigation.propTypes = {
    pathname: PropTypes.string.isRequired,
    dropdownOpen: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    closeDropdown: PropTypes.func.isRequired,
};
