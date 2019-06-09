import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Icon } from "semantic-ui-react";
import * as UI from "./UI";
import Box from "../../../../components/General/Box";
import Condition from "../../../../components/General/Condition";
import MultiSelectCheckbox from "../../../../components/MultiSelectCheckbox";
import * as filterActions from "../../../../store/actions/filter.action";
import { isNilOrEmpty } from "../../../../utils/helper";

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
        <UI.Container>
            <Box onClick={() => props.handleFilterExpand(props.id, !props.isExpand)}>
                <FilterTitle title={props.name} isExpand={props.isExpand} />
            </Box>
            <Condition when={props.isExpand}>
                <UI.CheckboxContainer>
                    <MultiSelectCheckbox
                      options={props.values}
                      selectedValues={props.filterToApply}
                      handleCheckBoxClick={filterOption => {
                            props.handleCheckBoxClick(props.id, filterOption, props.filterToApply);
                        }}
                      handleClearAllFilters={() => props.handleClearAllFilters(props.id)}
                      handleSelectAllFilters={() =>
                            props.handleSelectAllFilters(props.id, props.values)
                        }
                    />
                </UI.CheckboxContainer>
            </Condition>
        </UI.Container>
    );
};

function toggleSelectedOption(arrOfData, dataObj) {
    if (isNilOrEmpty(dataObj) || !R.is(Array, arrOfData)) {
        return arrOfData;
    }

    const foundIndex = R.findIndex(R.propEq("value", dataObj.value))(arrOfData);
    if (foundIndex !== -1) {
        return R.remove(foundIndex, 1, arrOfData);
    }
    arrOfData.push(dataObj);
    return arrOfData;
}

function mapStateToProps(state, ownProps) {
    const selectedFiltersData = R.pathOr({}, [ownProps.id], state.filters.selectedFilters || {});
    return {
        ...selectedFiltersData
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleFilterExpand: (filterId, toggleState) => {
            dispatch(filterActions.toggleFilterExpandStateAction(filterId, toggleState));
        },
        handleCheckBoxClick: (filterId, filterOption, prevSelectedValues) => {
            let selectedOptionsArr = toggleSelectedOption(prevSelectedValues, filterOption);
            selectedOptionsArr = isNilOrEmpty(selectedOptionsArr)
                ? []
                : R.clone(selectedOptionsArr);
            dispatch(filterActions.handleFilterOptionClick(filterId, selectedOptionsArr));
        },

        handleSelectAllFilters: filterId => {
            dispatch(filterActions.handleFilterOptionClick(filterId, ownProps.values || []));
        },
        handleClearAllFilters: filterId => {
            dispatch(filterActions.handleFilterOptionClick(filterId, []));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RenderFilter);
