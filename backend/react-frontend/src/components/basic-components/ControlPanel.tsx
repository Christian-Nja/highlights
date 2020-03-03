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
      text: ""
    };
  }

  render = () => {
    return (
      <div className="columnContainer">
        <textarea
          id="textInput"
          value={this.state.text}
          onChange={this.handleTextChange}
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
