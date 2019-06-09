import React from "react";
import { Checkbox, Button } from "semantic-ui-react";
import styled from "styled-components";
import * as R from "ramda";
import Flex from "../General/Flex";
import Condition from "../General/Condition";
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
`;

function isOptionSelected(selectedValuesArr, option) {
    if (isNilOrEmpty(selectedValuesArr) || isNilOrEmpty(option)) {
        return false;
    }
    const foundIndex = R.findIndex(R.propEq("value", option.value))(selectedValuesArr);
    return foundIndex !== -1;
}

const ActionButtons = props => {
    return (
        <ActionContainer>
            <ButtonWrapper primary className="first-child" onClick={props.selectAllFilters}>
                {" "}
                Select All
{" "}
            </ButtonWrapper>
            <ButtonWrapper className="last-child" onClick={props.clearAllFilters}>
                {" "}
                Clear Selection
{" "}
            </ButtonWrapper>
        </ActionContainer>
    );
};

const MultiSelectCheckbox = props => {
    return (
        <Container>
            <ActionButtons
              clearAllFilters={props.handleClearAllFilters}
              selectAllFilters={props.handleSelectAllFilters}
            />
            <CheckboxGroupContainer>
                <Condition when={isNilOrEmpty(props.options)}>
                    <Flex>
                        <div> No Data Available </div>
                    </Flex>
                </Condition>

                <Condition when={!isNilOrEmpty(props.options)}>
                    {props.options
                        ? props.options.map(optionObj => {
                              return (
                                  <CheckboxContainer key={optionObj.id}>
                                      <Checkbox
                                        label={optionObj.label}
                                        value={optionObj.value}
                                        checked={isOptionSelected(
                                              props.selectedValues,
                                              optionObj
                                          )}
                                        onClick={e => {
                                              const checkedState = e.target.checked;
                                              props.handleCheckBoxClick(optionObj, checkedState);
                                          }}
                                      />
                                  </CheckboxContainer>
                              );
                          })
                        : null}
                </Condition>
            </CheckboxGroupContainer>
        </Container>
    );
};

MultiSelectCheckbox.defaultProps = {
    options: [
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
