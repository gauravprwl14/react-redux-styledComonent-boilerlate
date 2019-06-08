import React from "react";
import { Input } from "semantic-ui-react";
import styled from "styled-components";
import Flex from "../General/Flex";
import Box from "../General/Box";

const SearchBoxContainer = styled(Flex)`
    align-items: center !important;
    flex: 1;
`;

const InputBoxContainer = styled(Flex)`
    flex: 1;
    margin-left: 10px;
    .ui.icon.input {
        width: 100%;
    }
    input {
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        width: 100%;
    }
`;

const SearchBox = () => {
    return (
        <SearchBoxContainer center>
            <Box>
                <span className="text t-m text-bold">Search</span>
            </Box>
            <InputBoxContainer>
                <Input className="marginV0" icon="search" />
            </InputBoxContainer>
        </SearchBoxContainer>
    );
};

export default SearchBox;
