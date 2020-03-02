import * as React from "react";

export interface WordProps {
  title: string;
}

export default class Word extends React.Component<WordProps> {
  constructor(props: Readonly<WordProps>) {
    super(props);
  }

  render = () => {
    return <div></div>;
  };
}
