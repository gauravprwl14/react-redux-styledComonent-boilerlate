import React from "react";
import { Header } from "semantic-ui-react";

const ShowHeader = props => {
    return (
      <Header className="resultCount" as="h2" inverted attached="top">
        {props.title}
        <span>
          {props.resultCount}
                Results
        </span>
      </Header>
    );
};

export default ShowHeader;
