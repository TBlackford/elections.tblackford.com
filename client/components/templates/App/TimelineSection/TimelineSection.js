import React from 'react';
import * as R from 'ramda';
import generate from 'parliament-svg';

const seats = {
    "linke": {
        "seats": 5,
        "colour": "#a08"
    },
    "spd": {
        "seats": 5,
        "colour": "#e02"
    },
    "gruene": {
        "seats": 5,
        "colour": "#0b2"
    },
    "union": {
        "seats": 5,
        "colour": "#333"
    }
};

const count = 20;

function MakeSVG(image) {
    image = image.children;
    console.log(image);

    console.log(R.reverse(image).map(i => {
        <i.tagName key={i.id} {...i.properties.attributes} />
    }));

    return (
        <svg style={{width: "100%", height: "100%"}}>
            {
                R.reverse(image).map(i => {
                    <i.tagName key={i.id} {...i.properties.attributes} />
                })
            }
        </svg>
    )
}

export default function TimelineSection() {
    const ParliamentSVG = generate(seats, count);
    
    return (
        <div className="section timeline-section">
            <div className="columns">
                <div className="column is-8 is-offset-2 text-left">
                    {/*Here, add in a timeline list*/}
                    {MakeSVG(ParliamentSVG)}
                </div>
            </div>
        </div>
    );
}