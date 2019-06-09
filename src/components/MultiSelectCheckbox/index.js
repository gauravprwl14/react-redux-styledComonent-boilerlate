import React from "react";
import { Checkbox, Button } from "semantic-ui-react";
import styled from "styled-components";
import Flex from "../General/Flex";
import { isNilOrEmpty } from "../../utils/helper";

const Container = styled(Flex)`
    flex-direction: column;
`;

const ActionContainer = styled(Flex)`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
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

const CheckboxGroupContainer = styled(Flex)`
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 10px;
`;
const CheckboxContainer = styled(Flex)`
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;

    ${"" /* .ui.checkbox input:checked:focus ~ .box:before,
    .ui.checkbox input:checked:focus ~ label:before {
        background: ${colors.primary};
        border: rgba(255, 255, 255, 0.36);
    }

    .ui.checkbox input:checked ~ .box:after,
    .ui.checkbox input:checked ~ label:after {
        color: ${colors.white};
        border: rgba(255, 255, 255, 0.36);
    } */}
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

const MultiSelectCheckbox = props => {
    return (
        <Container>
            <ActionButtons />
            <CheckboxGroupContainer>
                {!isNilOrEmpty(props.valuesToRender)
                    ? props.valuesToRender.map(checkboxObj => {
                          return (
                              <CheckboxContainer key={checkboxObj.label}>
                                  <Checkbox label={checkboxObj.label} value={checkboxObj.value} />
                              </CheckboxContainer>
                          );
                      })
                    : null}
            </CheckboxGroupContainer>
        </Container>
    );
};

MultiSelectCheckbox.defaultProps = {
    valuesToRender: [
        {
            label: "48 Hours",
            value: "48 Hours"
        },
        {
            label: "48 2Hours",
            value: "48 Hours"
        }
    ]
};

export default MultiSelectCheckbox;
