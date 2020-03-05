/**
 * Component accept and stores document to be parsed and send them to rst-service
 * saliency extractor.
 */

import * as React from "react";

export interface ControlPanelProps {
  handleTextAreaClick: (text: string) => void;
}

export interface ControlPanelState {
  text: string;
}

export default class ControlPanel extends React.Component<
  ControlPanelProps,
  ControlPanelState
> {
  constructor(props: Readonly<ControlPanelProps>) {
    super(props);
    this.state = {
      text:
        "Texas Instruments Japan Ltd., a unit of Texas Instruments Inc., said it opened a plant" +
        "in South Korea to manufacture control devices. The new plant, located in chinchon" +
        "about 60 miles from Seoul, will help meet increasing and diversifying demand for" +
        "control products in South Korea, the company said. The new plant will produce" +
        "control devices used in mothor vehicles and household appliances."
    };
  }

  render = () => {
    return (
      <div className="columnContainer">
        <textarea
          id="textInput"
          value={this.state.text}
          onChange={this.handleTextChange}
          rows={4}
        ></textarea>
        <button
          className="button"
          onClick={() => this.props.handleTextAreaClick(this.state.text)}
        >
          Parse
        </button>
      </div>
    );
  };

  handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ text: event.target.value });
  };
}
