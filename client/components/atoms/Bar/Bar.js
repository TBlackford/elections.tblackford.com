import React from 'react';
import PropTypes from 'prop-types';

export default function Bar(props) {
    const { 
        style, numberStyle, textStyle, width, colour, text, number,
        displayText, displayNumber 
    } = props;

    const styles = {
        default: {
            width: width,
            height: "24px",
            fontSize: "12px",
            textAlign: "center",
            lineHeight: "2",
            verticalAlign: "middle",
        },
        common: { // Don't override
            width: "100%",
            display: "flex",
            flexWrap: "wrap"
        },
        number: {
            backgroundColor: colour,
            color: "white",
            overflow: "hidden",
            // The display thing is in the render return            
        },
        text: {
            color: "#4a4a4a",
            textOverflow: "ellipsis",
            display: (displayText) ? "block" : "none"
        }
    }

    return (
        <div style={Object.assign({}, styles.common, style)}>
            <div style={Object.assign({}, styles.default, styles.number, numberStyle)}>
                <b style={{display: (displayNumber) ? "block" : "none"}}>{number}</b>
            </div>
            <br />
            <div style={Object.assign({}, styles.default, styles.text, textStyle)}>
                <b>{text}</b>
            </div>
        </div>
    )
}

Bar.propTypes = {
    style: PropTypes.object,
    numberStyle: PropTypes.object,
    textStyle: PropTypes.object,
    width: PropTypes.string,
    colour: PropTypes.string,
    text: PropTypes.string,
    number: PropTypes.number,
    displayText: PropTypes.bool,
    displayNumber: PropTypes.bool
};

Bar.defaultProps = {
    style: {},
    numberStyle: {},
    textStyle: {},
    width: '',
    colour: '',
    text: '',
    number: 0,
    displayText: true,
    displayNumber: true,
};