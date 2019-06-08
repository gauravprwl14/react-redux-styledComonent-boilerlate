import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Flex from "../../../components/General/Flex";
import Box from "../../../components/General/Box";
import MultiSelectCheckbox from "../../../components/MultiSelectCheckbox";

const FilterWrapper = styled(Flex)`
    flex: 1;
    min-height: 66px;
    align-items: center;
`;

const Container = styled(Flex)`
    flex: 1;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
`;

const FliterName = styled(Flex)`
    flex: 1;
`;

const FilterTitle = () => {
    return (
        <FilterWrapper>
            {" "}
            <FliterName>
                <span className="text t-ll text-bold">dasd </span>
            </FliterName>
            <Box>
                <Icon name="triangle left" />
            </Box>
        </FilterWrapper>
    );
};

const MultiSelectFilter = () => {
    return (
        <Container>
            <FilterTitle />
            <Box>
                <MultiSelectCheckbox />
            </Box>
        </Container>
    );
};

export default MultiSelectFilter;
