import React, { Component } from "react";
import { connect } from "react-redux";
// import * as homeActions from "../../store/actions/home.action";
import * as showContactActions from "../../store/actions/showContact.action";
import logo from "../../assets/images/icons/logo.svg";
import "./styles.scss";

class Home extends Component {
    componentDidMount() {
        this.props.fetchShowContactsData();
    }

    render() {
        return (
          <div>
            {" "}
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                        Edit
                <code>src/App.js</code>
                        and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org">
                        Learn React
              </a>
              <button onClick={this.props.fetchShowContactsData} type="button">
                {" "}
                        ASync Button Click
                {' '}
                {this.props.asyncActionCount}
                {" "}
              </button>
            </header>
            {" "}
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
