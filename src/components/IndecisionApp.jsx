import React from 'react';

import Header from './Header.jsx';
import AddOption from './AddOption.jsx';
import Options from './Options.jsx';
import Action from './Action.jsx';
import OptionModal from './OptionModal.jsx';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // removing an individual item in the Option component
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists ';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // getting the data saved in localStorage, parsing through it with JSON
  // setting the state options to the new value
  componentDidMount() {
    // check for bad data so it won't crash the app
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      // check to see if options exist in localStorage
      // if not, let the default state (empty array) be the value
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // if JSON data is invalid, fall back to the default value
    }
  }

  // saving options array to localStorage only if the number of items
  // has been changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
