import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as homeActions from "../../store/actions/home.action";
import logo from "../../assets/images/icons/logo.svg";
import "./styles.scss";

const Home = props => {
    useEffect(() => {
        props.testAsyncAction();
    }, []);
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
          <button onClick={props.testAsyncAction} type="button">
            {" "}
                    ASync Button Click
            {' '}
            {props.asyncActionCount}
            {" "}
          </button>
        </header>
        {" "}
      </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        testAsyncAction: () => dispatch(homeActions.testAsyncAction())
    };
}
function mapStateToProps(state) {
    return {
        asyncActionCount: state.homeReducer.asyncActionCount
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
