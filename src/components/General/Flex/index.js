import React from "react";
import styled from "@xstyled/styled-components";
import PropTypes from "prop-types";

function getFlexWrap(props) {
    if (props.wrap) {
        return "wrap";
    }
    if (props.wrapReverse) {
        return "wrap-reverse";
    }
    return "no-wrap";
}

const Flex = styled(
    ({
        wrap,
        direction,
        justifyContent,
        alignItems,
        wrapReverse,
        inline,
        center,
        column,
        ...rest
    }) => <div {...rest} />
)`
    display: ${p => (p.inline ? "inline-flex" : "flex")};
    flex-wrap: ${p => getFlexWrap(p)};
    flex-direction: ${p => (p.column ? "column" : p.direction)};
    align-items: ${p => (p.center ? "center" : p.alignItems)};
    justify-content: ${p => (p.center ? "center" : p.justifyContent)};
`;

Flex.propTypes = {
    /** Determine which css flex `flex-direction` should use */
    direction: PropTypes.string,
    /** Determine which css flex `justify-content` should use */
    justifyContent: PropTypes.string,
    /** Determine which css flex `align-items` should use */
    alignItems: PropTypes.string,
    /** Use for set `flex-wrap` as `'wrap'` */
    wrap: PropTypes.bool,
    /** Use for set 'flex-wrap' as `'wrap-reverse'` */
    wrapReverse: PropTypes.bool,
    /** Use for set css`display` as `'inline'` */
    inline: PropTypes.bool,
    /** Use for set `justify-content` and `align-items` as `'center'` */
    center: PropTypes.bool,
    /** Use for set `flex-direction` as `'column'` */
    column: PropTypes.bool
};

Flex.defaultProps = {
    justifyContent: "flex-start",
    alignItems: "normal",
    direction: "row",
    wrapReverse: false,
    wrap: false,
    inline: false,
    center: false,
    column: false
};

export default Flex;
