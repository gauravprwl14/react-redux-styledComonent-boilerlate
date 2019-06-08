import styled, { css } from "@xstyled/styled-components";
import PropTypes from "prop-types";

const offsetFactory = ({ outside, top, right, left, bottom, vertical, horizontal, all }) => {
    const sProperty = outside ? "margin" : "padding";
    return css`
        ${sProperty}-top: ${top || vertical || all}px;
        ${sProperty}-right: ${right || horizontal || all}px;
        ${sProperty}-bottom: ${bottom || vertical || all}px;
        ${sProperty}-left: ${left || horizontal || all}px;
    `;
};

const Box = styled.div`
    ${p => offsetFactory(p)};
    display: ${p => (p.inline ? "inline" : "block")};
`;

Box.propTypes = {
    /** Determine which type of offset should use (default: `padding`) */
    outside: PropTypes.bool,
    /** Determine which type of css `display` behavior should use (default: `block`) */
    inline: PropTypes.bool,
    /** Set value for all directions */
    all: PropTypes.number,
    /** Set value for `top` direction */
    top: PropTypes.number,
    /** Set value for `right` direction */
    right: PropTypes.number,
    /** Set value for `bottom` direction */
    bottom: PropTypes.number,
    /** Set value for `left` direction */
    left: PropTypes.number,
    /** Set value for both (`top` and `bottom`) direction */
    vertical: PropTypes.number,
    /** Set value for both (`left` and `right`) direction */
    horizontal: PropTypes.number
};

Box.defaultProps = {
    outside: false,
    inline: false,
    all: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    vertical: 0,
    horizontal: 0
};

export default Box;
