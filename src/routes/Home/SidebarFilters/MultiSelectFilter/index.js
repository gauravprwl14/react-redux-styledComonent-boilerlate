import React from "react";
// import { connect } from "react-redux";
// import { Icon } from "semantic-ui-react";
import * as UI from "./UI";
import RenderFilter from "./RenderFilter";
import { isNilOrEmpty } from "../../../../utils/helper";

const MultiSelectFilter = props => {
    if (isNilOrEmpty(props.filtersToRender)) {
        return <UI.Container>No Filters Available</UI.Container>;
    }

    return props.filtersToRender.map(filterObj => {
        return (
            <RenderFilter
              {...filterObj}
              key={filterObj.id}
              handleFilterExpand={props.handleFilterExpand}
            />
        );
    });
};

export default MultiSelectFilter;
