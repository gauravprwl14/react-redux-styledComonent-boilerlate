import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Icon } from "semantic-ui-react";
import * as UI from "./UI";
import Box from "../../../../components/General/Box";
import Condition from "../../../../components/General/Condition";
import MultiSelectCheckbox from "../../../../components/MultiSelectCheckbox";
import * as filterActions from "../../../../store/actions/filter.action";

const FilterTitle = props => {
    return (
        <UI.FilterWrapper isExpand={props.isExpand}>
            {" "}
            <UI.FilterName>
                <span className="text t-ll text-bold">{props.title}</span>
            </UI.FilterName>
            <Box>
                <Icon name="triangle left" />
            </Box>
        </UI.FilterWrapper>
    );
};

const RenderFilter = props => {
    return (
        <UI.Container onClick={() => props.handleFilterExpand(props.id, !props.isExpand)}>
            <FilterTitle title={props.name} isExpand={props.isExpand} />
            <Condition when={props.isExpand}>
                <UI.CheckboxContainer>
                    <MultiSelectCheckbox options={props.values} />
                </UI.CheckboxContainer>
            </Condition>
        </UI.Container>
    );
};

function mapStateToProps(state, ownProps) {
    const selectedFiltersData = R.pathOr({}, [ownProps.id], state.filters.selectedFilters || {});
    return {
        ...selectedFiltersData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleFilterExpand: (filterId, toggleState) => {
            dispatch(filterActions.toggleFilterExpandStateAction(filterId, toggleState));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RenderFilter);
