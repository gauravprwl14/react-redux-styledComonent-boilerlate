import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import * as homeActions from "../../store/actions/home.action";
import * as showContactActions from "../../store/actions/showContact.action";
import * as filtersActions from "../../store/actions/filter.action";
import RenderShowContact from "./RenderShowContact.js";
import SidebarFilters from "./SidebarFilters";
import { HEADER_COLUMN } from "../../utils/constants";
import Flex from "../../components/General/Flex";
import Box from "../../components/General/Box";
import "./styles.scss";

const SidebarContainer = styled(Flex)`
    flex-basis: 24%;
    min-height: 100vh;
`;

const BodyContainer = styled(Flex)`
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
`;
const ShowContactContainer = styled(Box)`
    width: 100%;
`;

class Home extends Component {
    componentDidMount() {
        this.props.fetchShowContactsData();
        this.props.fetchAllFilters();
    }

    render() {
        return (
            <div>
                <Flex className="grow borderT3px primaryBorder paddingV0">
                    <SidebarContainer className="whitesmokeBG paddingV1rem borderRightBS">
                        <SidebarFilters />
                    </SidebarContainer>
                    <BodyContainer className="searchResults paddingV1rem">
                        <ShowContactContainer>
                            <RenderShowContact headerColumnArr={HEADER_COLUMN} />
                        </ShowContactContainer>
                    </BodyContainer>
                </Flex>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchShowContactsData: () => dispatch(showContactActions.fetchShowContactAction()),
        fetchAllFilters: () => {
            const initializeSelectedFilters = true;
            dispatch(filtersActions.fetchAllFilters(initializeSelectedFilters));
        }
    };
}
function mapStateToProps(state) {
    return {
        asyncActionCount: state.home.asyncActionCount
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
