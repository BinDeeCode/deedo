import React from "react";
import styled from "styled-components";

const Item = styled.a`
  background-color: ${props => (props.cheked ? "none" : "white")};
  cursor: pointer;
  color: ${props => (props.cheked ? "white" : "black")};
  padding: 10px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  height: 21px;
  overflow: hidden;
`;

const ChecBox = styled.div`
  border-radius: 100%;
  background-color: ${props => (props.cheked ? "transparent" : "#eaeaea")};
  border: 1px solid ${props => (props.cheked ? "white" : "#636363")};
  padding: 0;

  width: 20px;
  height: 20px;
`;

const Title = styled.div`
  margin: 0;
  margin-left: 10px;
  font-size: 16px;
  line-height: 26px;
  text-decoration: ${props => (props.cheked ? "line-through" : "none")};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export default class Items extends React.Component {
  state = {
    cheked: false
  };

  handleClick = () => {
    this.setState({ cheked: !this.state.cheked });
  };

  render() {
    return (
      <Item cheked={this.state.cheked} onClick={this.handleClick}>
        <ChecBox cheked={this.state.cheked} />
        <Title cheked={this.state.cheked}>{this.props.title} </Title>
      </Item>
    );
  }
}
