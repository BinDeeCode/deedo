import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Input = styled.input`
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
`;
function upperFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Wrapper = styled.div`
  width: 100%;
`;

export default class List extends React.Component {
  state = {
    list: ["Купить молока", "Позвонить маме"]
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
      </Wrapper>
    );
  }
}
