import React, { Component } from "react";
import { connect } from "react-redux";
// import * as homeActions from "../../store/actions/home.action";
import { Grid } from "semantic-ui-react";
import * as showContactActions from "../../store/actions/showContact.action";
import RenderShowContact from "./RenderShowContact.js";
import { HEADER_COLUMN } from "../../utils/constants";
import "./styles.scss";

class Home extends Component {
    componentDidMount() {
        this.props.fetchShowContactsData();
    }

    render() {
        return (
          <div>
            <Grid.Row className="grow borderT3px primaryBorder paddingV0">
              <Grid.Column
                className="whitesmokeBG paddingV1rem borderRightBS"
                mobile={16}
                tablet={5}
                computer={4}
              >
                Sidebar
              </Grid.Column>
              <Grid.Column
                className="searchResults paddingV1rem"
                mobile={16}
                tablet={11}
                computer={12}
              >
                <RenderShowContact headerColumnArr={HEADER_COLUMN} />
              </Grid.Column>
            </Grid.Row>
          </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchShowContactsData: () => dispatch(showContactActions.fetchShowContactAction())
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
