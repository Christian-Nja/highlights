import * as React from "react";

export interface WordProps {
  word: any;
}

export default class Word extends React.Component<WordProps> {
  constructor(props: Readonly<WordProps>) {
    super(props);
  }

  render = () => {
    return <span className="word">{this.props.word}</span>;
  };
}
