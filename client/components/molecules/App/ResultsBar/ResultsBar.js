import React from 'react';
import PropTypes from 'prop-types';

export default function ResultsBar(props) {
    const { segments, showArrow } = props;

    return (
        <div className="resultsbar">
            {
                (showArrow) ? 
                    <div style={{textAlign: "center", verticalAlign: "middle", width: "100%", fontSize: "2em"}}>↓</div> :
                    <div />
            }
            <div style={{ height: "24px", width: "100%", display: "flex", flexWrap: "wrap" }}>
                {segments}
            </div>
            <br />
        </div>
        
    )
}

ResultsBar.defaultProps = {
    segments: [],
    showArrow: true,
}

ResultsBar.propTypes = {
    segments: PropTypes.array,
    showArrow: PropTypes.bool,
}

