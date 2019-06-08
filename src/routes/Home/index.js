import React from "react";
import logo from "../../assets/images/icons/logo.svg";
import "./styles.scss";

const Home = () => {
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
        </header>
        {" "}
      </div>
    );
};

export default Home;
