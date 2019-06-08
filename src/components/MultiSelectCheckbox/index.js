import React from "react";
import { Checkbox, Form } from "semantic-ui-react";
import styled from "styled-components";
import Flex from "../General/Flex";
import Box from "../General/Box";

const Container = styled(Flex)`
    align-items: center !important;
`;

const MultiSelectCheckbox = () => {
    return (
        <Container>
            <Form.Group>
                <Checkbox label="48 Hours" name="cbsallnews" value="48_hours" />
                <Checkbox label="482 Hours" name="cbsallnews" value="48_hours_2" />
            </Form.Group>
        </Container>
    );
};

export default MultiSelectCheckbox;
