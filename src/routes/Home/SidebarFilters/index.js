import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Flex from "../../../components/General/Flex";
import SearchBox from "../../../components/SearchBox";
import Spinner from "../../../components/General/Spinner";
import Condition from "../../../components/General/Condition";
import MultiSelectFilter from "./MultiSelectFilter/index";
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
                <SearchBox />
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
        filtersToRender: state.filters.filterToRender || []
    };
}

export default connect(mapStateToProps)(SidebarFilters);
