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
        "Barack Hussein Obama II (born August 4, 1961) is an American attorney and politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and an Illinois state senator from 1997 to 2004. " +
        "Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black person to head the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. Turning to elective politics, he represented the 13th district from 1997 until 2004 in the Illinois Senate, when he ran for the U.S. Senate. Obama received national attention in 2004 with his March Senate-primary win, his well-received July Democratic National Convention keynote address, and his landslide November election to the Senate. In 2008, he was nominated for president a year after his presidential campaign began, and after close primary campaigns against Hillary Clinton. Obama was elected over Republican John McCain and was inaugurated on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate."
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
