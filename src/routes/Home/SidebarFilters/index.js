import React from "react";
import styled from "styled-components";
import Flex from "../../../components/General/Flex";
import SearchBox from "../../../components/SearchBox";
import MultiSelectFilter from "./MultiSelectFilter";

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
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    align-items: center !important;
`;

const FilterContainer = styled(Flex)`
    background-color: white;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    box-shadow: inset 0px 0px -px #ddd;
`;

const SidebarFilters = () => {
    return (
        <SideBarFilterContainer>
            <SearchBoxWrapper>
                <SearchBox />
            </SearchBoxWrapper>
            <FilterContainer>
                <MultiSelectFilter />
            </FilterContainer>
        </SideBarFilterContainer>
    );
};

export default SidebarFilters;
