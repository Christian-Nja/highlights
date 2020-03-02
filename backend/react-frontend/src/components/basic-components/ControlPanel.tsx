/**
 * Component accept and stores document to be parsed and send them to rst-service
 * saliency extractor.
 */

import * as React from "react";

import axios from "axios";

export interface ControlPanelProps {}

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
        <button className="button" onClick={this.handleClick}>
          Parse
        </button>
      </div>
    );
  };

  /**
   * Function check if a document file is loaded or text is written and in positive case
   * calls parseDocument
   */
  handleClick = (): void => {
    this.axiosGetTest();
  };

  /**
   * Function sends request to rst-service microservice to extract saliency.
   */
  parseDocument = (): void => {};

  handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ text: event.target.value });
  };

  axiosGetTest = (): void => {
    axios({
      method: "get",
      url: "http://rst-service/test",
      responseType: "stream"
    }).then(function(response: any) {
      console.log(response);
    });
  };
}
