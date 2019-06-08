import React from "react";
import { Checkbox, Form, Button } from "semantic-ui-react";
import styled from "styled-components";
import Flex from "../General/Flex";
import Box from "../General/Box";
import * as colors from "../../utils/colour";

const Container = styled(Flex)`
    align-items: center !important;
    flex-direction: column;
`;

const ActionContainer = styled(Flex)`
    flex-direction: row;
    flex-wrap: wrap;
    .button {
        border-radius: unset !important;
    }
    .button.first-child {
        margin-left: 0em !important;
        border-top-left-radius: 0.28571429rem !important;
        border-bottom-left-radius: 0.28571429rem !important;
        color: red;
    }

    .button.last-child {
        border-top-right-radius: 0.28571429rem !important;
        border-bottom-right-radius: 0.28571429rem !important;
    }
`;

const ButtonWrapper = styled(Button)`
    margin-left: 0px !important;
    margin-right: 0px !important;
    min-width: 150px;
`;

const ActionButtons = () => {
    return (
        <ActionContainer>
            <ButtonWrapper primary className="first-child">
                {" "}
                Select All
{" "}
            </ButtonWrapper>
            <ButtonWrapper className="last-child"> Clear Selection </ButtonWrapper>
        </ActionContainer>
    );
};

const MultiSelectCheckbox = () => {
    return (
        <Container>
            <ActionButtons />
            <Form.Group>
                <Checkbox label="48 Hours" name="cbsallnews" value="48_hours" />
                <Checkbox label="482 Hours" name="cbsallnews" value="48_hours_2" />
            </Form.Group>
        </Container>
    );
};

export default MultiSelectCheckbox;
