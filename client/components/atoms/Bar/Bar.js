import React from 'react';
import PropTypes from 'prop-types';
import hexToHsl  from 'hex-to-hsl';

export default function Bar(props) {
    const { 
        style, numberStyle, textStyle, width, colour, text, number,
        displayText, displayNumber 
    } = props;

    const styles = {
        default: {
            width: "100%",
            height: "24px",
            fontSize: "12px",
            textAlign: "center",
            lineHeight: "2",
            verticalAlign: "middle",
        },
        common: { // Don't override
            width: width,
        },
        number: {
            backgroundColor: colour,
            color: (hexToHsl(colour)[2] > 70) ? "#4a4a4a" : "white",
            overflow: "hidden",
            // The display thing is in the render return            
        },
        text: {
            color: "#4a4a4a",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
        }
    }

    return (
        <div style={Object.assign({}, styles.common, style)}>
            <div style={Object.assign({}, styles.default, styles.number, numberStyle)}>
                <b>{number}</b>
            </div>
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