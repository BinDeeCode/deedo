import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Input = styled.input`
  position: fixed;
  bottom: 10px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 10pt;
  height: 30px;
  width: calc(100% - 33px);
  padding-left: 10px;
  margin-left: 10px;
  background-color: #6638f0;

  @media screen and (min-width: 480px) {
    padding: 0px;
    padding-top: 2px;
    margin: 10px;
    margin-top: 100px;
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    width: calc(100% - 32px);
    font-family: "Roboto", sans-serif;
    font-size: 10pt;
    position: relative;
  }
`;
function upperFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Wrapper = styled.div`
  width: 100%;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 34px;
  border: none;
  width: 80px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10pt;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export default class List extends React.Component {
  state = {
    list: ["Buy milk", "Call Andre"]
  };

  handleAdd = e => {
    if (e.key === "Enter") {
      const newItem = upperFirstChar(document.getElementById("inp").value);
      if (newItem === "" || newItem === " ") return;
      const newMassive = this.state.list;
      newMassive.push(newItem);
      this.setState({ list: newMassive }, function() {
        document.getElementById("inp").value = "";
      });
    } else {
    }
  };

  mobileAdd = () => {
    const newItem = upperFirstChar(document.getElementById("inp").value);
    if (newItem === "" || newItem === " ") return;
    const newMassive = this.state.list;
    newMassive.push(newItem);
    this.setState({ list: newMassive }, function() {
      document.getElementById("inp").value = "";
    });
  };

  render() {
    return (
      <Wrapper>
        {this.state.list.map(function(item, index) {
          return <Item title={item} key={index} />;
        })}
        <Input
          placeholder="Press Enter for add task"
          onKeyPress={this.handleAdd}
          id="inp"
          type="text"
        />
        <AddButton onClick={this.mobileAdd}>Add</AddButton>
      </Wrapper>
    );
  }
}
