import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from "react-image-fallback";

const tryRequire = (path) => {
    try {
        return require(`${path}`);
    } catch (err) {
        return null;
    }
};

export default function CountryCard(props) {
    const {
        id, name, isoCode, continent, flagUrl
    } = props;

    var ref = "/" + isoCode.toLowerCase() + '/v/timeline';
    var img_src = '/images/' + flagUrl;

    return (
        
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <a href={ref}>
                            <ReactImageFallback 
                                src={img_src}
                                initialImage='/images/loading.svg'
                                fallbackImage='https://via.placeholder.com/200x150.svg?text=Flag'
                                alt={"Flag of " + name}
                            />
                        </a>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4"><a href={ref}>{name}</a></p>
                            <p className="subtitle is-6">{continent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}