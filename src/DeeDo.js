import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";

import List from "./List";

document.body.style = "background: #6638F0;";

const AppWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App = styled.div`
  margin-top: 100px;
  width: 500px;
  background-color: #003650;
  border-radius: 5px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h3`
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  margin-top: 15px;
  padding-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

class DeeDo extends Component {
  render() {
    return (
      <AppWrapper>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
        </style>
        <App>
          <Title>List</Title>
          <List />
        </App>
      </AppWrapper>
    );
  }
}

export default DeeDo;
