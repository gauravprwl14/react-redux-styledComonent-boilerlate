import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "semantic-ui-react";
import Flex from "../../../components/General/Flex";
import Box from "../../../components/General/Box";
import MultiSelectCheckbox from "../../../components/MultiSelectCheckbox";
import { isNilOrEmpty } from "../../../utils/helper";
import * as colors from "../../../utils/colour";

const FilterWrapper = styled(Flex)`
    flex: 1;
    min-height: 66px;
    align-items: center;
    position: relative;
    ${props =>
        props.isOpened &&
        css`
            &:before {
                content: "";
                background: ${colors.primary};
                width: 5px;
                height: 100%;
                position: absolute;
                left: -15px;
            }
        `}
`;

const Container = styled(Flex)`
    flex: 1;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
`;

const FilterName = styled(Flex)`
    flex: 1;
`;
const CheckboxContainer = styled(Flex)`
    margin: 0px -1rem 10px;
    padding: 1rem;
    background: ${colors.whiteSmoke};
    border: 1px solid ${colors.primary};
`;

const FilterTitle = props => {
    return (
        <FilterWrapper isOpened={props.isOpened}>
            {" "}
            <FilterName>
                <span className="text t-ll text-bold">{props.title}</span>
            </FilterName>
            <Box>
                <Icon name="triangle left" />
            </Box>
        </FilterWrapper>
    );
};

const RenderFilter = props => {
    return (
        <Container>
            <FilterTitle title={props.name} isOpened={props.isOpened} />
            <CheckboxContainer>
                <MultiSelectCheckbox options={props.values} />
            </CheckboxContainer>
        </Container>
    );
};

const MultiSelectFilter = props => {
    if (isNilOrEmpty(props.filtersToRender)) {
        return <Container>No Filters Available</Container>;
    }
    return props.filtersToRender.map(filterObj => {
        return <RenderFilter {...filterObj} />;
    });
};

export default MultiSelectFilter;
