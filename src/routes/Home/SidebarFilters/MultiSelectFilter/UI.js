import styled, { css } from "styled-components";
import OmitProps from "../../../../hoc/OmitProps";
import Flex from "../../../../components/General/Flex";
import * as colors from "../../../../utils/colour";

export const FilterWrapper = styled(OmitProps(["isExpand"], Flex))`
    flex: 1;
    min-height: 66px;
    align-items: center;
    position: relative;
    ${props =>
        props.isExpand &&
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

export const Container = styled(Flex)`
    flex: 1;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border-bottom: 1px solid ${colors.lightGrey};
`;

export const FilterName = styled(Flex)`
    flex: 1;
`;
export const CheckboxContainer = styled(Flex)`
    margin: 0px -1rem 10px;
    padding: 1rem;
    background: ${colors.whiteSmoke};
    border: 1px solid ${colors.primary};
`;
