import React from "react";
import * as R from "ramda";

const OmitProps = R.curry((omittedProps, ComponentToRender, props) => {
    const { children, ...rest } = R.omit(omittedProps, props);
    return <ComponentToRender {...rest}>{children}</ComponentToRender>;
});

export default OmitProps;
