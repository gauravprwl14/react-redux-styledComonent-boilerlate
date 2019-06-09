import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Flex from "../../../components/General/Flex";
import SearchBox from "../../../components/SearchBox";
import Spinner from "../../../components/General/Spinner";
import Condition from "../../../components/General/Condition";
import MultiSelectFilter from "./MultiSelectFilter/index";
import { trimString } from "../../../utils/helper";
import * as filterActions from "../../../store/actions/filter.action";
import * as colors from "../../../utils/colour";

const SideBarFilterContainer = styled(Flex)`
    flex: 1;
    display: block !important;
    padding-right: 1px;
`;

const SearchBoxWrapper = styled(Flex)`
    flex: 1;
    margin-top: -1rem;
    min-height: 42px;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid ${colors.lightGrey}
    align-items: center !important;
`;

const FilterContainer = styled(Flex)`
    background-color: white;
    border-bottom: 1px solid ${colors.lightGrey};
    box-shadow: inset 0px 0px -px #ddd;
    flex-direction: column;
`;

const SidebarFilters = props => {
    return (
        <SideBarFilterContainer>
            <SearchBoxWrapper>
                <SearchBox
                  searchKeyword={props.searchKeyword}
                  handleSearchInputChange={props.handleSearchKeywordChange}
                />
            </SearchBoxWrapper>
            <FilterContainer>
                <Condition when={props.isLoading}>
                    <Spinner />
                </Condition>
                <Condition when={!props.isLoading}>
                    <MultiSelectFilter filtersToRender={props.filtersToRender} />
                </Condition>
            </FilterContainer>
        </SideBarFilterContainer>
    );
};

function mapStateToProps(state) {
    return {
        isLoading: state.filters.isLoading || false,
        filtersToRender: state.filters.filterToRender || [],
        searchKeyword: state.filters.searchKeyword || ""
    };
}
function mapDispatchToProps(dispatch) {
    return {
        handleSearchKeywordChange: searchTerm => {
            dispatch(filterActions.updateSearchKeyword(trimString(searchTerm)));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarFilters);
