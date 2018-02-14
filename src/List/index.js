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
  outline: none;
  ::placeholder {
    color: white;
    opacity: 0.85;
  }

  @media screen and (min-width: 480px) {
    bottom: 0px;
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
  padding-bottom: 100px;
  @media screen and (min-width: 480px) {
    padding-bottom: 0px;
  }
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
    list: []
  };

  isEnterPress = e => {
    if (e.key === "Enter") {
      this.handleAdd();
    }
  };

  stateToStorage = () => {
    this.state.list.map(function(item, index) {
      localStorage.setItem("itemTitle" + index, item);
    });
  };

  storageToState = () => {
    var getStorageItems = [];
    var newStateList = [];
    for (var a = 0; a < localStorage.length; a++) {
      getStorageItems.push(localStorage.getItem("itemTitle" + a));
    }
    getStorageItems.map(function(item, index) {
      if (item !== null) {
        newStateList.push(getStorageItems[index]);
      }
    });
    this.setState({ list: newStateList }, () => {
      console.log(this.state);
    });
  };

  handleAdd = () => {
    const newItem = upperFirstChar(document.getElementById("inp").value);
    var newList = [];
    newList = this.state.list;
    newList.push(newItem);
    this.setState({ list: newList }, function() {
      document.getElementById("inp").value = "";
      this.stateToStorage();
    });
  };

  componentDidMount() {
    this.storageToState();
  }

  render() {
    return (
      <Wrapper>
        {this.state.list.map(function(item, index) {
          return <Item title={item} key={index} index={index} />;
        })}
        <Input
          placeholder="Enter your task"
          onKeyPress={this.isEnterPress}
          id="inp"
          type="text"
        />
        <AddButton onClick={this.handleAdd}>Add</AddButton>
      </Wrapper>
    );
  }
}
