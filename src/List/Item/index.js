import React from "react";
import styled from "styled-components";

import SVG from "./check.svg";
import Times from "./times.svg";

const Item = styled.div`
  background-color: ${props => (props.cheked ? "none" : "white")};
  cursor: pointer;
  color: ${props => (props.cheked ? "white" : "black")};
  padding: 10px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 21px;
  overflow: hidden;
  width: calc(100% - 40px);
`;

const ChecBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: ${props => (props.cheked ? "transparent" : "#eaeaea")};
  border: 1px solid ${props => (props.cheked ? "transparent" : "#636363")};
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

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Delete = styled(Img)``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default class Items extends React.Component {
  state = {
    cheked: false,
    isDeleted: false
  };

  handleClick = () => {
    this.setState({ cheked: !this.state.cheked }, () => {
      localStorage.setItem("doneItem" + this.props.index, this.state.cheked);
    });
  };

  componentDidMount() {
    //Проверка локального хранилища

    if (localStorage.getItem("doneItem" + this.props.index) === "true") {
      this.setState({ cheked: true });
    }
  }

  deleteComponent = () => {
    localStorage.removeItem("doneItem");
    this.setState({ isDeleted: true });
    localStorage.removeItem("itemTitle" + this.props.index);
  };

  render() {
    return !this.state.isDeleted ? (
      <Item cheked={this.state.cheked} onClick={this.handleClick}>
        <Wrapper>
          <ChecBox cheked={this.state.cheked}>
            {this.state.cheked ? <Img src={SVG} /> : null}
          </ChecBox>
          <Title cheked={this.state.cheked}>{this.props.title} </Title>
        </Wrapper>

        {this.state.cheked ? (
          <Delete src={Times} onClick={this.deleteComponent} />
        ) : null}
      </Item>
    ) : null;
  }
}
