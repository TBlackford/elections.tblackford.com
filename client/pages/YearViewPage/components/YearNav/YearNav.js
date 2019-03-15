import React    from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navigation(props) {
    const { years, currentYear } = props;

    return (
        <aside>
            <span className="yearnav-year">{currentYear}</span>
            <ul>
                {
                    years.map(year => {
                        return (
                            <li key={JSON.stringify(year)}>
                                <a href={"/us/votes/" + year.year}>
                                    <div className="nav-item">         
                                        <span>{year.year}</span>                      
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    )

    return (
        <aside>
            <ul>
                <li className="active">
                    <div className="nav-item">
                        <i className="material-icons">photo_library</i>
                        <span>View More</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <i className="material-icons">local_atm</i>
                        <span>Transactions</span>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="nav-item">
                        <i className="material-icons">settings</i>
                        <span>settings</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <i className="material-icons">launch</i>
                        <span>launch</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <i className="material-icons">info_outline</i>
                        <span>learn more</span>
                    </div>
                </li>
            </ul>
        </aside>
    )
}